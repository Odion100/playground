const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const name = "FlyTournaments";
const root_admin = "5e82135037543ac757722727";

describe("buAPI.Tournaments.add(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Tournaments } = await Client.loadService(url);
    const res = await Tournaments.add({ name, root_admin });

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
    expect(res.newTournament).to.have.property("status", "unsubmitted");
    expect(res.newTournament).to.have.property("referee", false);
    expect(res.newTournament).to.have.property("rounds", 1);
    expect(res.newTournament).to.have.property("round_clock", 0);
  });
});
