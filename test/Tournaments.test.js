const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const moment = require("moment");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const name = `FlyTournament-${parseInt(Math.random() * 1000)}`;
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
    expect(res.newTournament).to.have.property("clock", 0);
  });
});

describe("buAPI.Tournaments.get(options)", () => {
  it("should be able to succesfully retrieve a tournaments using email and password or just id", async () => {
    const { Tournaments } = await Client.loadService(url);
    const res = await Tournaments.get({ name });
    //console.log(res);
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

describe("buAPI.Users.updateField(options)", () => {
  it("should be able to update non constant fields", async () => {
    const profile_image = "http://localhost:4402/fake/image";
    const banner_image = "http://localhost:4402/fake/image";
    const secondary_admins = ["5e87797d77b82ba7900e332f", "5e8779bfe3e2ccc0da9ad9a7"];
    const primary_zipcodes = ["11238", "11220"];
    const description =
      "Civility vicinity graceful is it at Play. Basketball Improve up at 2 on mention perhaps raising.";
    const team_limit = 4;
    // const teams = [
    //   "5e877b1a579cd18468ba25fa,",
    //   "5e877b2852e5d307c043313a",
    //   "5e877b3514ee9b69a034da98",
    //   "5e877b40d291389edb348d4c"
    // ];
    const type = "2 on 2";
    const rules = ["n/a"];
    const refereed = true;
    const rounds = 4;
    const clock = 600000;
    const start_date = moment()
      .add(1, "day")
      .toJSON();
    const end_date = moment()
      .add(2, "weeks")
      .toJSON();

    const { Tournaments } = await Client.loadService(url);
    const { tournaments } = await Tournaments.get({ name });

    const res = await Tournaments.updateFields({
      id: tournaments[0]._id,
      fields: {
        profile_image,
        banner_image,
        secondary_admins,
        primary_zipcodes,
        description,
        team_limit,
        type,
        rules,
        refereed,
        rounds,
        clock,
        start_date,
        end_date
      }
    });

    expect(res)
      .to.be.an("object")
      .that.has.keys("updatedTournament", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedTournament).to.have.property("profile_image", profile_image);
    expect(res.updatedTournament).to.have.property("banner_image", banner_image);
    expect(res.updatedTournament)
      .to.have.property("secondary_admins")
      .that.deep.equals(secondary_admins);
    expect(res.updatedTournament)
      .to.have.property("primary_zipcodes")
      .that.deep.equals(primary_zipcodes);
    expect(res.updatedTournament).to.have.property("description", description);
    expect(res.updatedTournament).to.have.property("team_limit", team_limit);
    expect(res.updatedTournament).to.have.property("type", type);
    expect(res.updatedTournament)
      .to.have.property("rules")
      .that.deep.equals(rules);
    expect(res.updatedTournament).to.have.property("refereed", refereed);
    expect(res.updatedTournament).to.have.property("rounds", rounds);
    expect(res.updatedTournament).to.have.property("clock", clock);
    expect(res.updatedTournament).to.have.property("start_date", start_date);
    expect(res.updatedTournament).to.have.property("end_date", end_date);
  });
});

describe("buAPI.Tournaments.publish(options)", () => {
  it("should be able to successfully update a tournament's status to 'published'", async () => {
    const { Tournaments } = await Client.loadService(url);
    const { tournaments } = await Tournaments.get({ name });
    const id = tournaments[0];
    const res = await Tournaments.publish({ id });
    //console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("updatedTournament", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedTournament).to.have.property("status", "published");
  });
});

describe("buAPI.Tournaments.cancel(options)", () => {
  it("should be able to cancel a tournament giving its id", async () => {
    const { Tournaments } = await Client.loadService(url);
    const { tournaments } = await Tournaments.get({ name });
    const id = tournaments[0]._id;
    const res = await Tournaments.cancel({ id });
    //console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("updatedTournament", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedTournament).to.have.property("status", "unpublished");
  });
});

describe("buAPI.Tournaments.reactivate(options)", () => {
  it("should be able to reactivate a tournament giving its id", async () => {
    const { Tournaments } = await Client.loadService(url);
    const { tournaments } = await Tournaments.get({ name });
    const id = tournaments[0]._id;
    const res = await Tournaments.reactivate({ id });
    //console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("updatedTournament", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedTournament).to.have.property("status", "published");
  });
});
