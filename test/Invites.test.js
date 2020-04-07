const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/utils";
const port = 7900;
const url = `http://localhost:${port}/${route}`;

describe("buAPI.Invites.add(options)", () => {
  it("should be able to successfully create an invite", async () => {
    const { Invites } = await Client.loadService(url);
    const res = await Invites.add({
      source_type: "tournament",
      source: "5e8c95739136f2127da83417",
      target_type: "team",
      target: "5e8cc4359180142b0605416f",
      message: "Welcome to BallerUnited Official Tournament"
    });

    console.log(res);
    expect(res)
      .to.be.an("object")
      .that.has.keys("status", "newInvite", "message");
  });
});
