const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;
const email = `odzysofreezy${parseInt(Math.random() * 100)}@gmail.com`;
const password = "passthesenutson";

describe("buAPI.Users.add(options)", () => {
  it("successfully create a new user with email and password required", async () => {
    const { Users } = await Client.loadService(url);
    const res = await Users.add({ email, password });
    expect(res)
      .to.be.an("object")
      .that.has.all.keys("newUser", "status", "message");
    expect(res.message).to.be.equal("New user created successfully.");
    expect(res.status).to.be.equal(200);
    expect(res.newUser).to.be.an("object");
  });
});

describe("buAPI.Users.get(options)", () => {
  it("should be able to succesfully retrieve a user using email and password or just id", async () => {
    const { Users } = await Client.loadService(url);
    const res = await Users.get({ email, password });
    expect(res)
      .to.be.an("object")
      .that.has.all.keys("user", "status");
    expect(res.status).to.be.equal(200);
    expect(res.user).to.be.an("object");

    const res2 = await Users.get({ id: res.user._id });
    expect(res2)
      .to.be.an("object")
      .that.has.all.keys("user", "status");
    expect(res2.status).to.be.equal(200);
    expect(res2.user).to.be.an("object");
  });
});

describe("buAPI.Users.updateField(options)", () => {
  it("should be able to succesfully retrieve a user using email and password or just id", async () => {
    const { Users } = await Client.loadService(url);
    const { user } = await Users.get({ email, password });
    const res = await Users.update({
      fields: {
        first_name: "Izak",
        last_name: "Chapper",
        age: 32,
        gender: "Male",
        profile_image: "image.png",
        primary_zipcodes: ["12133"],
        tag: "#kjdlsfj"
      },
      id: user._id
    });
    expect(res).to.be.an("object");
  });
});
