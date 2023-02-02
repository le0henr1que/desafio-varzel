import request from "supertest";
import { app } from "../../../../app";
import nock from "nock";

describe("POST /update/:id/auto", () => {
  jest.setTimeout(100000);

  it("should login user and return 200 Authenticated", async () => {
    const res = await request(app).post("/login").send({
      email: "admin@admin.com",
      password: "admin123",
    });

    expect(res.status).toBe(200);
  });

  it("should login user and return 400 bad formatted email field", async () => {
    const res = await request(app).post("/login").send({
      email: "adminadmin.com",
      password: "admin123",
    });

    expect(res.status).toBe(400);
  });

  it("should login user and return 400 Invalid Password", async () => {
    const res = await request(app).post("/login").send({
      email: "admin@admin.com",
      password: "admin12344",
    });

    expect(res.status).toBe(400);
    expect(res.body.messagem).toBe("Invalid password");
  });
  it("should login user and return 400 Invalid Password", async () => {
    const res = await request(app).post("/login").send({
      email: "admgfin@admin.com",
      password: "admin123",
    });

    expect(res.status).toBe(400);
    expect(res.body.messagem).toBe("User not exist");
  });
});
