const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");

const { url } = require("./config");
const Basketball_url = require("../Basketball/config").url;

const admin1 = "5ea7abc8eec47c351aae771d";
const admin2 = "5ea7afd830564c7983b39220";
const creator = admin1;
const court = "5ea7afe7e8b09cfd2af4a3b8";
let game_id = "";

beforeAll(async () => {
  const { Teams, Games } = await Client.loadService(Basketball_url);
  const res1 = await Teams.add({
    name: `Game State Test 1  --- ${parseInt(Math.random() * 1000)}`,
    root_admin: admin1,
  });
  const res2 = await Teams.add({
    name: `Game State Test 2 --- ${parseInt(Math.random() * 1000)}`,
    root_admin: admin2,
  });

  //create mock team and game
  const res3 = await Games.add({
    creator,
    team1: res1.newTeam._id,
    team2: res2.newTeam._id,
    court,
    team_size: 1,
  });
  game_id = res3.newGame._id;
});

describe("GameData.GameState.initialize(options)", () => {
  it("should be able to successfully create a gamestate", async () => {
    const { GameState } = await Client.loadService(url);
    const { Games } = await Client.loadService(Basketball_url);
    const { games } = await Games.get({ id: game_id });
    //console.log(games);
    const res = await GameState.initialize(games[0]);
    //console.log(res);

    expect(res).to.be.an("object").that.has.keys("newGameState", "status", "message");
    expect(res.status).to.equal(200);
    expect(res.newGameState).to.be.an("object");
    expect(res.newGameState).to.have.property("_id").that.is.a("string");

    expect(res.newGameState).to.have.property("team1_roster").that.deep.equals([admin1]);
    expect(res.newGameState).to.have.property("team2_roster").that.deep.equals([admin2]);
    expect(res.newGameState).to.have.property("game_start_time").that.is.a("string");
    expect(res.newGameState).to.have.property("gameplay_clock", 0);
    expect(res.newGameState).to.have.property("gameplay_status", "intermission");
    expect(res.newGameState).to.have.property("current_quarter", 0);
    expect(res.newGameState).to.have.property("team1_timeouts_remaining", 0);
    expect(res.newGameState).to.have.property("team2_timeouts_remaining", 0);

    expect(res.newGameState).to.have.property("team1_points", 0);
    expect(res.newGameState).to.have.property("team1_rebounds", 0);
    expect(res.newGameState).to.have.property("team1_steals", 0);
    expect(res.newGameState).to.have.property("team1_blocks", 0);
    expect(res.newGameState).to.have.property("team1_turnovers", 0);
    expect(res.newGameState).to.have.property("team1_assists", 0);
    expect(res.newGameState).to.have.property("team1_fouls", 0);
    expect(res.newGameState)
      .to.have.property("team1_active_players")
      .that.is.an("array")
      .that.has.a.lengthOf(0);

    expect(res.newGameState).to.have.property("team2_points", 0);
    expect(res.newGameState).to.have.property("team2_rebounds", 0);
    expect(res.newGameState).to.have.property("team2_steals", 0);
    expect(res.newGameState).to.have.property("team2_blocks", 0);
    expect(res.newGameState).to.have.property("team2_turnovers", 0);
    expect(res.newGameState).to.have.property("team2_assists", 0);
    expect(res.newGameState).to.have.property("team2_fouls", 0);
    expect(res.newGameState)
      .to.have.property("team2_active_players")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
  });
});

describe("GameData.GameState.get(options)", () => {
  it("should successfully query a gameState by id ", async () => {
    const { GameState } = await Client.loadService(url);

    const res = await GameState.get({ id: game_id });
    //console.log(res);

    expect(res.status).to.equal(200);
    expect(res.gameState).to.be.an("object");
    expect(res.gameState).to.have.property("_id").that.is.a("string");

    expect(res.gameState).to.have.property("team1_roster").that.deep.equals([admin1]);
    expect(res.gameState).to.have.property("team2_roster").that.deep.equals([admin2]);
    expect(res.gameState).to.have.property("game_start_time").that.is.a("string");
    expect(res.gameState).to.have.property("gameplay_clock", 0);
    expect(res.gameState).to.have.property("gameplay_status", "intermission");
    expect(res.gameState).to.have.property("current_quarter", 0);
    expect(res.gameState).to.have.property("team1_timeouts_remaining", 0);
    expect(res.gameState).to.have.property("team2_timeouts_remaining", 0);

    expect(res.gameState).to.have.property("team1_points", 0);
    expect(res.gameState).to.have.property("team1_rebounds", 0);
    expect(res.gameState).to.have.property("team1_steals", 0);
    expect(res.gameState).to.have.property("team1_blocks", 0);
    expect(res.gameState).to.have.property("team1_turnovers", 0);
    expect(res.gameState).to.have.property("team1_assists", 0);
    expect(res.gameState).to.have.property("team1_fouls", 0);
    expect(res.gameState)
      .to.have.property("team1_active_players")
      .that.is.an("array")
      .that.has.a.lengthOf(0);

    expect(res.gameState).to.have.property("team2_points", 0);
    expect(res.gameState).to.have.property("team2_rebounds", 0);
    expect(res.gameState).to.have.property("team2_steals", 0);
    expect(res.gameState).to.have.property("team2_blocks", 0);
    expect(res.gameState).to.have.property("team2_turnovers", 0);
    expect(res.gameState).to.have.property("team2_assists", 0);
    expect(res.gameState).to.have.property("team2_fouls", 0);
    expect(res.gameState)
      .to.have.property("team2_active_players")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
  });
});

describe("GameData.GameState.changeLineup(options)", () => {
  it("should successfully update the gameState active player list for a give team", async () => {
    const { GameState } = await Client.loadService(url);
    const { gameState } = await GameState.get({ id: game_id });
    const res = await GameState.changeLineup({
      id: game_id,
      team_id: gameState.team1,
      remove_players: [],
      insert_players: [admin1],
    });

    console.log(res);
  });
});
