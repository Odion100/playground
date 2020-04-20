const { expect } = require("chai");
const { Client } = require("tasksjs-react-client");
const moment = require("moment");
const route = "bu/api";
const port = 7899;
const url = `http://localhost:${port}/${route}`;

const creator = "5e987bf158c4e913ee9a3c93";
const date = moment().toJSON();
const court = "5e987bfc0101204a799a54d3";
const description = "Pull up boi";
const invitee = "5e9ce4fbe67e87294b224b24";
const tags = ["ps9"];
let id = "";
let invite_only = [true, false][parseInt(Math.random() * 1000) % 2];

describe("buAPI.Callouts.add(options)", function () {
  it("should successfully create a new Callout", async () => {
    const { Callouts } = await Client.loadService(url);
    const res = await Callouts.add({
      creator,
      date,
      court,
      invite_only,
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("newCallout", "status", "message");
    expect(res.status).to.equal(200);
    expect(res.newCallout).to.be.an("object");
    expect(res.newCallout).to.have.property("created_date").that.is.a("string");
    expect(res.newCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.newCallout).to.have.property("attendees").that.is.an("array").that.has.a.lengthOf(0);
    expect(res.newCallout).to.have.property("_id").that.is.an("string");
    expect(res.newCallout).to.have.property("invite_only", invite_only);
    expect(res.newCallout).to.have.property("court", court);
    expect(res.newCallout).to.have.property("creator", creator);
    id = res.newCallout._id;
  });
});

describe("buAPI.Callouts.get(options)", function () {
  it("should successfully return a Callout", async () => {
    const { Callouts } = await Client.loadService(url);
    const res = await Callouts.get({
      id,
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("callouts", "status");
    expect(res.status).to.equal(200);
    expect(res.callouts).to.be.an("array");
    expect(res.callouts[0]).to.have.property("created_date").that.is.a("string");
    expect(res.callouts[0]).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.callouts[0])
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(res.callouts[0]).to.have.property("_id").that.is.an("string");
    expect(res.callouts[0]).to.have.property("invite_only", invite_only);
    expect(res.callouts[0]).to.have.property("court", court);
    expect(res.callouts[0]).to.have.property("creator", creator);
  });
});

describe("buAPI.Callouts.updateFields(options)", function () {
  it("should successfully update a Callout", async () => {
    const { Callouts } = await Client.loadService(url);
    invite_only = !invite_only;
    const res = await Callouts.updateFields({
      id,
      fields: {
        tags,
        description,
        invite_only,
      },
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedCallout", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedCallout).to.be.an("object");
    expect(res.updatedCallout).to.have.property("created_date").that.is.a("string");
    expect(res.updatedCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.updatedCallout)
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(res.updatedCallout).to.have.property("_id").that.is.an("string");
    expect(res.updatedCallout).to.have.property("court", court);
    expect(res.updatedCallout).to.have.property("creator", creator);

    expect(res.updatedCallout).to.have.property("invite_only", invite_only);
    expect(res.updatedCallout).to.have.property("description", description);
    expect(res.updatedCallout).to.have.property("tags").that.deep.equals(tags);
  });
});

describe("buAPI.Callouts.addInvitee(options)", function () {
  it("should successfully add an invitee to a Callout", async () => {
    const { Callouts } = await Client.loadService(url);

    const res = await Callouts.addInvitee({
      id,
      invitee,
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedCallout", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedCallout).to.be.an("object");
    expect(res.updatedCallout).to.have.property("created_date").that.is.a("string");
    expect(res.updatedCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.updatedCallout)
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(res.updatedCallout).to.have.property("_id").that.is.an("string");
    expect(res.updatedCallout).to.have.property("court", court);
    expect(res.updatedCallout).to.have.property("creator", creator);

    expect(res.updatedCallout).to.have.property("invite_only", invite_only);
    expect(res.updatedCallout).to.have.property("description", description);
    expect(res.updatedCallout).to.have.property("tags").that.deep.equals(tags);
    expect(res.updatedCallout).to.have.property("invitees").that.deep.equals([invitee]);
  });
});

describe("buAPI.Callouts.removeInvitee(options)", function () {
  it("should successfully remove an invitee from a Callout", async () => {
    const { Callouts } = await Client.loadService(url);

    const res = await Callouts.removeInvitee({
      id,
      invitee,
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedCallout", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedCallout).to.be.an("object");
    expect(res.updatedCallout).to.have.property("created_date").that.is.a("string");
    expect(res.updatedCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.updatedCallout)
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(res.updatedCallout).to.have.property("_id").that.is.an("string");
    expect(res.updatedCallout).to.have.property("court", court);
    expect(res.updatedCallout).to.have.property("creator", creator);

    expect(res.updatedCallout).to.have.property("invite_only", invite_only);
    expect(res.updatedCallout).to.have.property("description", description);
    expect(res.updatedCallout).to.have.property("tags").that.deep.equals(tags);
    expect(res.updatedCallout)
      .to.have.property("invitees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
  });
});

describe("buAPI.Callouts.addAttendee(options)", function () {
  it("should successfully add an attendee to a Callout", async () => {
    const { Callouts } = await Client.loadService(url);
    await Callouts.addInvitee({ id, invitee });
    const res = await Callouts.addAttendee({
      id,
      attendee: invitee,
    });
    //console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedCallout", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedCallout).to.be.an("object");
    expect(res.updatedCallout).to.have.property("created_date").that.is.a("string");
    expect(res.updatedCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.updatedCallout)
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(1);
    expect(res.updatedCallout).to.have.property("_id").that.is.an("string");
    expect(res.updatedCallout).to.have.property("court", court);
    expect(res.updatedCallout).to.have.property("creator", creator);

    expect(res.updatedCallout).to.have.property("invite_only", invite_only);
    expect(res.updatedCallout).to.have.property("description", description);
    expect(res.updatedCallout).to.have.property("tags").that.deep.equals(tags);
    if (invite_only)
      expect(res.updatedCallout)
        .to.have.property("invitees")
        .that.is.an("array")
        .that.has.a.lengthOf(0);
    else expect(res.updatedCallout).to.have.property("invitees").that.deep.equals([invitee]);
  });
});
describe("buAPI.Callouts.removeAttendee(options)", function () {
  it("should successfully remove an attendee to a Callout", async () => {
    const { Callouts } = await Client.loadService(url);

    const res = await Callouts.removeAttendee({
      id,
      attendee: invitee,
    });
    // console.log(res);
    expect(res).to.be.an("object").that.has.keys("updatedCallout", "status");
    expect(res.status).to.equal(200);
    expect(res.updatedCallout).to.be.an("object");
    expect(res.updatedCallout).to.have.property("created_date").that.is.a("string");
    expect(res.updatedCallout).to.have.property("date").that.equals(moment(date).toJSON());

    expect(res.updatedCallout)
      .to.have.property("attendees")
      .that.is.an("array")
      .that.has.a.lengthOf(0);
    expect(res.updatedCallout).to.have.property("_id").that.is.an("string");
    expect(res.updatedCallout).to.have.property("court", court);
    expect(res.updatedCallout).to.have.property("creator", creator);

    expect(res.updatedCallout).to.have.property("invite_only", invite_only);
    expect(res.updatedCallout).to.have.property("description", description);
    expect(res.updatedCallout).to.have.property("tags").that.deep.equals(tags);
    if (invite_only)
      expect(res.updatedCallout)
        .to.have.property("invitees")
        .that.is.an("array")
        .that.has.a.lengthOf(0);
    else expect(res.updatedCallout).to.have.property("invitees").that.deep.equals([invitee]);
  });
});