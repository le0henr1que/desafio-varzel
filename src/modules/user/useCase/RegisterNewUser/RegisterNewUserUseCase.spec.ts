import request from "supertest";
import { app } from "../../../../app";
import nock from "nock";

describe("POST /register/user", () => {
  jest.setTimeout(100000);
  it("should create a new user and return 201", async () => {
    const res = await request(app).post("/register/user").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password",
    });

    expect(res.status).toBe(201);
  });

  it("should create a new user and return err 400", async () => {
    const res = await request(app).post("/register/user").send({
      Name: "John Doe",
      Email: "johndoe@example.com",
      Password: "password",
    });

    expect(res.status).toBe(400);
  });
});
