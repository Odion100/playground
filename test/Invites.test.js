const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/utils";
const port = 7900;
const url = `http://localhost:${port}/${route}`;

const target = "5e8cc4359180142b0605416f";
const source = "5e8c95739136f2127da83417";
let _id = "";
describe("buAPI.Invites.add(options)", () => {
  it("should be able to successfully create an invite", async () => {
    const { Invites } = await Client.loadService(url);

    const res = await Invites.add({
      source_type: "tournament",
      source,
      target_type: "team",
      target,
      message: "Welcome to BallerUnited Official Tournament",
    });

    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "newInvite", "message");
    expect(res.status).to.equals(200);
    expect(res.newInvite).to.be.an("object");
    expect(res.newInvite).to.have.property("created_date").that.is.a("string");
    expect(res.newInvite).to.have.property("status", "sent");
    expect(res.newInvite).to.have.property("source_type", "tournament");
    expect(res.newInvite).to.have.property("target_type", "team");
    expect(res.newInvite).to.have.property("target", target);
    expect(res.newInvite).to.have.property("source", source);
    _id = res.newInvite._id;
    await new Promise((resolve) =>
      Invites.on(`new_invite:${target}`, (invite) => {
        console.log(`new_invite:${target} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("status", "sent");
        expect(invite).to.have.property("source_type", "tournament");
        expect(invite).to.have.property("target_type", "team");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        resolve();
      })
    );
  });
});
describe("buAPI.Invites.get(options)", () => {
  it("should be able to succesfully retrieve an invite using 'source', 'target' or 'id'", async () => {
    const { Invites } = await Client.loadService(url);

    const res = await Invites.get({ source, target, id: _id });
    //console.log(res);
    expect(res).to.be.an("object").that.has.all.keys("invites", "status");
    expect(res.status).to.be.equal(200);
    expect(res.invites).to.be.an("array");

    expect(res.invites[0]).to.be.an("object");
    expect(res.invites[0]).to.have.property("created_date").that.is.a("string");
    expect(res.invites[0]).to.have.property("status", "sent");
    expect(res.invites[0]).to.have.property("source_type", "tournament");
    expect(res.invites[0]).to.have.property("target_type", "team");
    expect(res.invites[0]).to.have.property("target", target);
    expect(res.invites[0]).to.have.property("source", source);
  });
});

describe("buAPI.Invites.markAsViewed(options)", () => {
  it("should be able to update invites status, response_message, and response_date", async () => {
    const { Invites } = await Client.loadService(url);
    const id = _id;

    const res = await Invites.markAsViewed({ id });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedInvite");
    expect(res.status).to.equals(200);
    expect(res.updatedInvite).to.be.an("object");
    expect(res.updatedInvite).to.have.property("created_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("source_type", "tournament");
    expect(res.updatedInvite).to.have.property("target_type", "team");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("viewed_date").that.is.a("string");
  });
});

describe("buAPI.Invites.cancel(options)", () => {
  it("should be able to update invites status, response_message, and response_date", async () => {
    const { Invites } = await Client.loadService(url);
    const id = _id;

    const res = await Invites.cancel({ id });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedInvite");
    expect(res.status).to.equals(200);
    expect(res.updatedInvite).to.be.an("object");
    expect(res.updatedInvite).to.have.property("created_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("source_type", "tournament");
    expect(res.updatedInvite).to.have.property("target_type", "team");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("viewed_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("status", "canceled");
  });
});

describe("buAPI.Invites.resend(options)", () => {
  it("should be able to update invites status, response_message, and response_date", async () => {
    const { Invites } = await Client.loadService(url);
    const id = _id;

    const res = await Invites.resend({
      id,
      message: "Re:Welcome to BallerUnited Official Tournament",
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedInvite");
    expect(res.status).to.equals(200);
    expect(res.updatedInvite).to.be.an("object");
    expect(res.updatedInvite).to.have.property("created_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("source_type", "tournament");
    expect(res.updatedInvite).to.have.property("target_type", "team");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("status", "sent");
  });
});

describe("buAPI.Invites.sendResponse(options)", () => {
  it("should be able to update invites status, response_message, and response_date", async () => {
    const { Invites } = await Client.loadService(url);
    const id = _id;
    const status = ["rejected", "accepted"][parseInt(Math.random() * 1000) % 2];
    const message = `I'm honored to have ${status} your offer`;
    console.log(`invite_response:${source}`);

    const res = await Invites.sendResponse({ id, status, message });

    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedInvite");
    expect(res.status).to.equals(200);
    expect(res.updatedInvite).to.be.an("object");
    expect(res.updatedInvite).to.have.property("created_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("status", status);
    expect(res.updatedInvite).to.have.property("source_type", "tournament");
    expect(res.updatedInvite).to.have.property("target_type", "team");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    await new Promise((resolve) =>
      Invites.on(`invite_response:${source}`, (invite) => {
        console.log(`invite_response:${source} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("source_type", "tournament");
        expect(invite).to.have.property("target_type", "team");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        resolve();
      })
    );
  });
});
