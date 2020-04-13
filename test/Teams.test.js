const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
//const moment = require("moment");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const name = `FlyTeam-${parseInt(Math.random() * 1000)}`;
const root_admin = "5e82135037543ac757722727";
const primary_zipcodes = ["12133", parseInt(Math.random() * 10000).toString()];
let id = "";

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
    id = res.newTeam._id;
  });
});

describe("buAPI.Teams.get(options)", () => {
  it("successfully create a new teams with email and password required", async () => {
    const { Teams } = await Client.loadService(url);
    const res = await Teams.get({ name, root_admin, primary_zipcodes });

    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "teams");
    expect(res.status).to.be.equal(200);

    expect(res.teams).to.be.an("array");

    expect(res.teams[0]).to.have.property("name", name);
    expect(res.teams[0]).to.have.property("root_admin").that.deep.equals(root_admin);
    expect(res.teams[0]).to.have.property("primary_zipcodes").that.deep.equals(primary_zipcodes);
    expect(res.teams[0]).to.have.property("status", "active");
    expect(res.teams[0]).to.have.property("created_date").that.is.a("string");

    const res2 = await Teams.get({ id });
    expect(res2.teams[0]._id).to.equals(id);
  });
});

describe("buAPI.Teams.updateFields(options)", () => {
  it("should be able to update any non constant fields", async () => {
    const status = "inactive";
    const profile_image = "http://fake/image.png";
    const banner_image = "http://fake/image.png";
    const secondary_admins = ["5e939ff91554a167a0bcd008"];
    const description = "The flyest of all teams";
    const { Teams } = await Client.loadService(url);

    const res = await Teams.updateFields({
      id,
      fields: {
        status,
        profile_image,
        banner_image,
        secondary_admins,
        description,
      },
    });

    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updatedTeam");
    expect(res.status).to.equal(200);
    expect(res.updatedTeam).to.be.an("object");
    expect(res.updatedTeam).to.have.property("_id", id);
    expect(res.updatedTeam).to.have.property("status", status);
    expect(res.updatedTeam).to.have.property("profile_image", profile_image);
    expect(res.updatedTeam).to.have.property("banner_image", banner_image);
    expect(res.updatedTeam).to.have.property("description", description);
    expect(res.updatedTeam).to.have.property("secondary_admins").that.deep.equals(secondary_admins);
  });
});
