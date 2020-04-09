const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const moment = require("moment");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const name = `FlyTeam-${parseInt(Math.random() * 1000)}`;
const root_admin = "5e82135037543ac757722727";
const primary_zipcodes = ["12133"];

describe("buAPI.Teams.add(options)", () => {
  it("successfully create a new teams with email and password required", async () => {
    const { Teams } = await Client.loadService(url);
    const res = await Teams.add({ name, root_admin, primary_zipcodes });

    console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("status", "newTeam", "message");

    expect(res.message).to.be.equal("New team created successfully.");
    expect(res.status).to.be.equal(200);
    expect(res.newTeam).to.be.an("object");

    expect(res.newTeam).to.have.property("name", name);
    expect(res.newTeam)
      .to.have.property("root_admin")
      .that.deep.equals(root_admin);
    expect(res.newTeam)
      .to.have.property("created_date")
      .that.is.a("string");
  });
});
