const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

describe("buAPI.Users.add(options)", () => {
  it("Successful request: Create a new user", async () => {
    const { Users } = await Client.loadService(url);
    console.log("Users:", Users);
    const res = await Users.add({
      email: `odzysofreezy${parseInt(Math.random() * 100)}@gmail.com`,
      password: "passthesenutson"
    });
    console.log(res);
    expect(res).to.be.an("object");
  });
});
