const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/utils";
const port = 7900;
const url = `http://localhost:${port}/${route}`;

const target = "5e8cc4359180142b0605416f";
const source = "5e8c95739136f2127da83417";
describe("buAPI.Invites.add(options)", () => {
  it("should be able to successfully create an invite", async () => {
    const { Invites } = await Client.loadService(url);
    const res = await Invites.add({
      source_type: "tournament",
      source,
      target_type: "team",
      target,
      message: "Welcome to BallerUnited Official Tournament"
    });

    //console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("status", "newInvite", "message");
    expect(res.status).to.equals(200);
    expect(res.newInvite).to.be.an("object");
    expect(res.newInvite)
      .to.have.property("created_date")
      .that.is.a("string");
    expect(res.newInvite).to.have.property("status", "sent");
    expect(res.newInvite).to.have.property("source_type", "tournament");
    expect(res.newInvite).to.have.property("target_type", "team");
    expect(res.newInvite).to.have.property("target", target);
    expect(res.newInvite).to.have.property("source", source);
  });
});
describe("buAPI.Invites.get(options)", () => {
  it("should be able to succesfully retrieve an invite using 'source', 'target' or 'id'", async () => {
    const { Invites } = await Client.loadService(url);
    const res = await Invites.get({ source, target });
    //console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.all.keys("invites", "status");
    expect(res.status).to.be.equal(200);
    expect(res.invites).to.be.an("array");

    expect(res.invites[0]).to.be.an("object");
    expect(res.invites[0])
      .to.have.property("created_date")
      .that.is.a("string");
    expect(res.invites[0]).to.have.property("status", "sent");
    expect(res.invites[0]).to.have.property("source_type", "tournament");
    expect(res.invites[0]).to.have.property("target_type", "team");
    expect(res.invites[0]).to.have.property("target", target);
    expect(res.invites[0]).to.have.property("source", source);

    const res2 = await Invites.get({ id: res.invites[0]._id });
    expect(res2)
      .to.be.an("object")
      .that.has.all.keys("invites", "status");
    expect(res2.status).to.be.equal(200);
    expect(res2.invites).to.be.an("array");

    expect(res2.invites[0]).to.be.an("object");
    expect(res2.invites[0])
      .to.have.property("created_date")
      .that.is.a("string");
    expect(res2.invites[0]).to.have.property("status", "sent");
    expect(res2.invites[0]).to.have.property("source_type", "tournament");
    expect(res2.invites[0]).to.have.property("target_type", "team");
    expect(res2.invites[0]).to.have.property("target", target);
    expect(res2.invites[0]).to.have.property("source", source);
  });
});
