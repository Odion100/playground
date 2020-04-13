const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/utils";
const port = 7900;
const url = `http://localhost:${port}/${route}`;
//
const target = "5e8cc4359180142b0605416f";
let source = "5e8c95739136f2127da83417";
let _id = "";
beforeAll(async () => {
  const route = "bu/api";
  const port = 7899;
  const url = `http://localhost:${port}/${route}`;
  const { Tournaments } = await Client.loadService(url);

  const name = `TheEventTester-${parseInt(Math.random() * 1000)}`;
  const root_admin = "5e82135037543ac757722727";
  const res = await Tournaments.add({ name, root_admin });
  source = res.newTournament._id;
});
describe("buAPI.Invites.add(options)", () => {
  it("should be able to successfully create an invite", async () => {
    const { Invites } = await Client.loadService(url);

    const res = await Invites.add({
      source_type: "tournaments",
      source,
      target_type: "teams",
      target,
      message: "Welcome to BallersUnited Official Tournament",
    });

    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "newInvite", "message");
    expect(res.status).to.equals(200);
    expect(res.newInvite).to.be.an("object");
    expect(res.newInvite).to.have.property("created_date").that.is.a("string");
    expect(res.newInvite).to.have.property("status", "sent");
    expect(res.newInvite).to.have.property("source_type", "tournaments");
    expect(res.newInvite).to.have.property("target_type", "teams");
    expect(res.newInvite).to.have.property("target", target);
    expect(res.newInvite).to.have.property("source", source);

    _id = res.newInvite._id;
    await new Promise((resolve) =>
      Invites.on(`new_invite:${target}`, (invite) => {
        console.log(`new_invite:${target} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("status", "sent");
        expect(invite).to.have.property("source_type", "tournaments");
        expect(invite).to.have.property("target_type", "teams");
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
    expect(res.invites[0]).to.have.property("source_type", "tournaments");
    expect(res.invites[0]).to.have.property("target_type", "teams");
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
    expect(res.updatedInvite).to.have.property("source_type", "tournaments");
    expect(res.updatedInvite).to.have.property("target_type", "teams");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("viewed_date").that.is.a("string");
    await new Promise((resolve) =>
      Invites.on(`invite_viewed:${source}`, (invite) => {
        console.log(`invite_viewed:${source} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("source_type", "tournaments");
        expect(invite).to.have.property("target_type", "teams");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        expect(invite).to.have.property("viewed_date").that.is.a("string");
        resolve();
      })
    );
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
    expect(res.updatedInvite).to.have.property("source_type", "tournaments");
    expect(res.updatedInvite).to.have.property("target_type", "teams");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("viewed_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("status", "canceled");

    await new Promise((resolve) =>
      Invites.on(`invite_canceled:${target}`, (invite) => {
        console.log(`invite_canceled:${target} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("source_type", "tournaments");
        expect(invite).to.have.property("target_type", "teams");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        expect(invite).to.have.property("viewed_date").that.is.a("string");
        expect(invite).to.have.property("status", "canceled");
        resolve();
      })
    );
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
    expect(res.updatedInvite).to.have.property("source_type", "tournaments");
    expect(res.updatedInvite).to.have.property("target_type", "teams");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    expect(res.updatedInvite).to.have.property("status", "sent");

    await new Promise((resolve) =>
      Invites.on(`new_invite:${target}`, (invite) => {
        console.log(`new_invite:${target} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("source_type", "tournaments");
        expect(invite).to.have.property("target_type", "teams");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        expect(invite).to.have.property("status", "sent");
        resolve();
      })
    );
  });
});

describe("buAPI.Invites.sendResponse(options)", () => {
  it("should be able to update invites status, response_message, and response_date", async () => {
    const { Invites } = await Client.loadService(url);
    const id = _id;
    const status = ["rejected", "accepted"][parseInt(Math.random() * 1000) % 2];
    const message = `I'm honored to have ${status} your offer`;

    const res = await Invites.sendResponse({ id, status, message });

    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedInvite");
    expect(res.status).to.equals(200);
    expect(res.updatedInvite).to.be.an("object");
    expect(res.updatedInvite).to.have.property("created_date").that.is.a("string");
    expect(res.updatedInvite).to.have.property("status", status);
    expect(res.updatedInvite).to.have.property("source_type", "tournaments");
    expect(res.updatedInvite).to.have.property("target_type", "teams");
    expect(res.updatedInvite).to.have.property("target", target);
    expect(res.updatedInvite).to.have.property("source", source);
    await new Promise((resolve) =>
      Invites.on(`invite_response:${source}`, (invite) => {
        console.log(`invite_response:${source} event called`);

        expect(invite).to.be.an("object");
        expect(invite).to.have.property("created_date").that.is.a("string");
        expect(invite).to.have.property("source_type", "tournaments");
        expect(invite).to.have.property("target_type", "teams");
        expect(invite).to.have.property("target", target);
        expect(invite).to.have.property("source", source);
        resolve();
      })
    );
    const buapi_route = "bu/api";
    const buapi_port = 7899;
    const buapi_url = `http://localhost:${buapi_port}/${buapi_route}`;
    const { Tournaments } = await Client.loadService(buapi_url);
    await new Promise((resolve) => {
      console.log(`team_added:${target}`);
      Tournaments.on(`team_added:${target}`, () => console.log("team added<<<-----------"));
      resolve();
    });
  });
});
