const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const name = `FlyTournament-${parseInt(Math.random() * 100)}`;
const root_admin = "5e82135037543ac757722727";
const primary_zipcodes = ["12133"];

describe("buAPI.Tournaments.add(options)", () => {
  it("successfully create a new tournaments with email and password required", async () => {
    const { Tournaments } = await Client.loadService(url);
    const res = await Tournaments.add({ name, root_admin, primary_zipcodes });

    // console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("status", "newTournament", "message");

    expect(res.message).to.be.equal("New tournament created successfully.");
    expect(res.status).to.be.equal(200);
    expect(res.newTournament).to.be.an("object");

    expect(res.newTournament).to.have.property("name", name);
    expect(res.newTournament)
      .to.have.property("root_admin")
      .that.deep.equals(root_admin);
    expect(res.newTournament).to.have.property("status", "unpublished");
    expect(res.newTournament).to.have.property("refereed", false);
    expect(res.newTournament).to.have.property("rounds", 1);
    expect(res.newTournament).to.have.property("round_clock", 0);
  });
});

describe("buAPI.Tournaments.get(options)", () => {
  it("should be able to succesfully retrieve a tournaments using email and password or just id", async () => {
    const { Tournaments } = await Client.loadService(url);
    const res = await Tournaments.get({ name });
    console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.all.keys("tournaments", "status");
    expect(res.status).to.be.equal(200);
    expect(res.tournaments)
      .to.be.an("array")
      .that.has.a.lengthOf(1);
    expect(res.tournaments[0]).to.be.an("object");
  });
});
