const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
//const moment = require("moment");
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

    //console.log(res)
    expect(res).to.be.an("object").that.has.keys("status", "newTeam", "message");
    expect(res.message).to.be.equal("New team created successfully.");
    expect(res.status).to.be.equal(200);
    //
    expect(res.newTeam).to.be.an("object");
    expect(res.newTeam).to.have.property("name", name);
    expect(res.newTeam).to.have.property("root_admin").that.deep.equals(root_admin);
    expect(res.newTeam).to.have.property("created_date").that.is.a("string");
  });
});

describe("buAPI.Teams.get(options)", () => {
  it("successfully create a new teams with email and password required", async () => {
    const { Teams } = await Client.loadService(url);
    const res = await Teams.get({ name, root_admin, primary_zipcodes });

    console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "teams");
    expect(res.status).to.be.equal(200);

    expect(res.teams).to.be.an("array");

    expect(res.teams[0]).to.have.property("name", name);
    expect(res.teams[0]).to.have.property("root_admin").that.deep.equals(root_admin);
    expect(res.teams[0]).to.have.property("primary_zipcodes").that.deep.equals(primary_zipcodes);
    expect(res.teams[0]).to.have.property("status", "active");
    expect(res.teams[0]).to.have.property("created_date").that.is.a("string");

    const res2 = await Teams.get({ id: res.teams[0]._id });
    expect(res2.teams[0]._id).to.equals(res.teams[0]._id);
  });
});
