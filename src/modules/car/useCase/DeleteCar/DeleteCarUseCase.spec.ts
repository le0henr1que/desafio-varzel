import request from "supertest";
import { app } from "../../../../app";
import nock from "nock";

describe("DELETE /delete/:id/auto", () => {
  jest.setTimeout(100000);

  it("should delete car id and return 200", async () => {
    const carId = "6361a62949c338551ab88c24";

    const token = await request(app).post("/login").send({
      email: "admin@admin.com",
      password: "admin123",
    });

    const res = await request(app)
      .delete(`/delete/${carId}/auto`)
      .set("Authorization", `Bearer ${token.body.token.token}`);

    expect(res.status).toBe(200);
  });
  it("should delete car id and return 400", async () => {
    const carId = "teste";
    const token = await request(app).post("/login").send({
      email: "admin@admin.com",
      password: "admin123",
    });

    const res = await request(app)
      .delete(`/delete/${carId}/auto`)
      .set("Authorization", `Bearer ${token.body.token.token}`);

    expect(res.status).toBe(400);
  });

  it("should delete car id and return 403", async () => {
    const carId = "6361a62949c338551ab88c24";

    const res = await request(app).delete(`/delete/${carId}/auto`);

    expect(res.status).toBe(403);
  });
});
