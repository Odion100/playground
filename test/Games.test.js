const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const moment = require("moment");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;
const creator = "5e94ce3b0baae3259bf82eec";
const team1 = "5e94cd8d4973e54eef1f4771";
const team2 = "5e94cda8f18cd6cf096ce1ce";
const court = "5e94cdd5382d4e90abf990f4";
const tags = [`FlyTournament-${parseInt(Math.random() * 1000)}`];
let id = "";
describe("buAPI.Games.add(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Games } = await Client.loadService(url);
    const res = await Games.add({
      creator,
      team1,
      team2,
      court,
      tags,
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
      tag: tags[0],
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

    tags.push("flygame");
    const res = await Games.updateFields({
      id,
      fields: {
        tags,
      },
    });
    console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedGame", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedGame).to.be.an("object");
    expect(res.updatedGame).to.have.property("created_date").that.is.a("string");
    expect(res.updatedGame).to.have.property("_id").that.is.a("string");
    expect(res.updatedGame).to.have.property("creator", creator);
    expect(res.updatedGame).to.have.property("team1", team1);
    expect(res.updatedGame).to.have.property("team2", team2);
    expect(res.updatedGame).to.have.property("court", court);
  });
});
