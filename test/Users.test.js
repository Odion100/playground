const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

describe("buAPI.Users.add(options)", () => {
  it("Successful request: Create a new user", async () => {
    const { Users } = await Client.loadService(url);

    const res = await Users.add({
      email: `odzysofreezy${parseInt(Math.random() * 100)}@gmail.com`,
      password: "passthesenutson"
    });

    expect(res)
      .to.be.an("object")
      .that.has.all.keys("newUser", "status", "message");
    expect(res.message).to.be.equal("New user created successfully.");
    expect(res.status).to.be.equal(200);
    expect(res.newUser).to.be.an("object");
  });
});
