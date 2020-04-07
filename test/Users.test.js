const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const email = `odzysofreezy${parseInt(Math.random() * 1000)}@gmail.com`;
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
    const first_name = "Izak";
    const last_name = "Chapper";
    const age = 32;
    const gender = "Male";
    const profile_image = "image.png";
    const primary_zipcodes = ["12133"];
    const tag = "#kjdlsfj";
    const { Users } = await Client.loadService(url);
    const { user } = await Users.get({ email, password });
    //console.log("user", user, email);
    expect(user).to.be.an("object");
    expect(user).to.have.property("email", email);
    expect(user).to.have.property("account_status", "active");
    expect(user)
      .to.have.property("primary_zipcodes")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(user)
      .to.have.property("created_date")
      .that.is.a("string");

    const res = await Users.updateFields({
      fields: {
        first_name,
        last_name,
        age,
        gender,
        profile_image,
        primary_zipcodes,
        tag
      },
      id: user._id
    });
    //console.log("res----->", res);
    expect(res).to.be.an("object");
    expect(res).to.have.property("status", 200);
    expect(res)
      .to.have.property("updatedUser")
      .that.is.an("object");
    expect(res.updatedUser).to.have.property("first_name", first_name);
    expect(res.updatedUser).to.have.property("last_name", last_name);
    expect(res.updatedUser).to.have.property("age", age);
    expect(res.updatedUser).to.have.property("gender", gender);
    expect(res.updatedUser).to.have.property("profile_image", profile_image);
    expect(res.updatedUser).to.have.property("account_status", "active");
    expect(res.updatedUser)
      .to.have.property("primary_zipcodes")
      .that.deep.equals(primary_zipcodes);
    expect(res.updatedUser).to.have.property("tag", tag);
  });
});

describe("buAPI.Users.setAccountStatus(options)", () => {
  it("should successfully update a given users accout_status", async () => {
    const { Users } = await Client.loadService(url);
    const { user } = await Users.get({ email, password });
    const res = await Users.setAccountStatus({
      status: "archived",
      id: user._id
    });
    //console.log("Users.setAccountStatus---->", res);
    expect(res).to.be.an("object");
    expect(res).to.have.property("status", 200);
    expect(res)
      .to.have.property("updatedUser")
      .that.is.an("object");
    expect(res.updatedUser).to.have.property("first_name");
    expect(res.updatedUser).to.have.property("last_name");
    expect(res.updatedUser).to.have.property("age");
    expect(res.updatedUser).to.have.property("gender");
    expect(res.updatedUser).to.have.property("profile_image");
    expect(res.updatedUser).to.have.property("primary_zipcodes");
    expect(res.updatedUser).to.have.property("account_status", "archived");
    expect(res.updatedUser).to.have.property("tag");
  });
});
