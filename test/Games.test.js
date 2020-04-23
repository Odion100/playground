const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;
const creator = "5e94ce3b0baae3259bf82eec";
const team1 = "5e94cd8d4973e54eef1f4771";
const team2 = "5e94cda8f18cd6cf096ce1ce";
const court = "5e94cdd5382d4e90abf990f4";
const tag = "testtag";
let id = "";

describe("buAPI.Games.add(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Games } = await Client.loadService(url);
    const res = await Games.add({
      creator,
      team1,
      team2,
      court,
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("newGame", "status", "message");
    expect(res.status).to.equal(200);
    expect(res.newGame).to.be.an("object");
    expect(res.newGame).to.have.property("created_date").that.is.a("string");
    expect(res.newGame).to.have.property("status", "unpublished");
    expect(res.newGame).to.have.property("_id").that.is.a("string");
    expect(res.newGame).to.have.property("creator", creator);
    expect(res.newGame).to.have.property("team1", team1);
    expect(res.newGame).to.have.property("team2", team2);
    expect(res.newGame).to.have.property("court", court);
    id = res.newGame._id;
  });
});

describe("buAPI.Games.get(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Games } = await Client.loadService(url);

    const res = await Games.get({
      creator,
      team1,
      team2,
      court,
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("games", "status");
    expect(res.status).to.equal(200);
    expect(res.games[0]).to.be.an("object");
    expect(res.games[0]).to.have.property("created_date").that.is.a("string");
    expect(res.games[0]).to.have.property("status", "unpublished");
    expect(res.games[0]).to.have.property("_id").that.is.a("string");
    expect(res.games[0]).to.have.property("creator", creator);
    expect(res.games[0]).to.have.property("team1", team1);
    expect(res.games[0]).to.have.property("team2", team2);
    expect(res.games[0]).to.have.property("court", court);
  });
});

describe("buAPI.Games.updateFields(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Games } = await Client.loadService(url);
    const team_size = 4;
    const rounds = 4;
    const clock = 600000;
    const overtime_clock = 300000;
    const refs = true;

    const res = await Games.updateFields({
      id,
      fields: {
        team_size,
        clock,
        overtime_clock,
        refs,
        rounds,
      },
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedGame", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedGame).to.be.an("object");
    expect(res.updatedGame).to.have.property("created_date").that.is.a("string");
    expect(res.updatedGame).to.have.property("_id").that.is.a("string");
    expect(res.updatedGame).to.have.property("creator", creator);
    expect(res.updatedGame).to.have.property("team1", team1);
    expect(res.updatedGame).to.have.property("team2", team2);
    expect(res.updatedGame).to.have.property("court", court);
    expect(res.updatedGame).to.have.property("team_size", team_size);
    expect(res.updatedGame).to.have.property("rounds", rounds);
    expect(res.updatedGame).to.have.property("clock", clock);
    expect(res.updatedGame).to.have.property("overtime_clock", overtime_clock);
    expect(res.updatedGame).to.have.property("refs", refs);
  });
});
describe("buAPI.Games.addTag(options)", () => {
  it("should successfully add a tag", async () => {
    const { Games } = await Client.loadService(url);

    const res = await Games.addTag({
      tag,
      id,
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "updated");
    expect(res).to.have.property("status", 200);
    expect(res).to.have.property("updated").to.equal(true);
  });
});

describe("buAPI.Games.findByTag(options)", () => {
  it("should successfully get an item by tag", async () => {
    const { Games } = await Client.loadService(url);

    const res = await Games.findByTag({
      tag,
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("status", "data");
    expect(res).to.have.property("status", 200);
    expect(res.data[0]).to.have.property("_id");
  });
});
