import request from "supertest";
import { app } from "../../../../app";
import nock from "nock";

describe("GET /list/:id/auto", () => {
  jest.setTimeout(100000);

  it("should list car id and return 200", async () => {
    const carId = "6361a62949c338551ab88c24";

    const res = await request(app).get(`/list/${carId}/auto`);

    expect(res.status).toBe(200);
  });
  it("should list car id and return 400", async () => {
    const carId = "teste";

    const res = await request(app).get(`/list/${carId}/auto`);

    expect(res.status).toBe(400);
  });
});
