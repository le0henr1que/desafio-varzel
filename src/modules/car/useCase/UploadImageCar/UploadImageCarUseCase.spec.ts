import request from "supertest";
import { app } from "../../../../app";
import nock from "nock";

describe("POST /upload/car/:id/image", () => {
  jest.setTimeout(100000);

  it("should upload a new image and return 201", async () => {
    const carId = "636069937389128f5c3efd7a";
    const res = await request(app).post(`/upload/car/${carId}/image`).send({
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBD",
    });

    expect(res.status).toBe(201);
  });

  it("should upload a new image and return 400", async () => {
    const carId = "636069937389128f5c3efd7a";
    const res = await request(app).post(`/upload/car/${carId}/image`).send({
      image: "",
    });

    expect(res.status).toBe(400);
  });
});
