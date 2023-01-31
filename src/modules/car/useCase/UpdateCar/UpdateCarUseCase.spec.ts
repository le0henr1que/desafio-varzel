import request from 'supertest';
import { app } from '../../../../app';
import nock from 'nock';


describe('POST /update/:id/auto', () => {
    jest.setTimeout(100000)
   

    it('should update car and return jwt expired', async () => {
        const carId = "636069937389128f5c3efd7a";
        const validJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWQ1ZTk0MDAwNzBlMjE5YWNkOTZkZiIsImlhdCI6MTY2NzE0MDM3NywiZXhwIjoxNjY3MTYxOTc3fQ.GVnbTIn6tjwHO3RU72VwAVYJSUdQ0bu7BPEG1sRttzY";

        const res = await request(app)
            .put(`/update/${carId}/auto`)
            .set('Authorization', `Bearer ${validJwt}`)
            .send({
                city:"Salvador - BA",
                name:"Prisma",
                brand: "Chevrolet",
                model: "1.4 MPFI LTZ 8V FLEX",
                year: "2020",
                km: "51.234 km",
                price:56000,
                image:"testeImg"
            });
            expect(res.status).toBe(403)
      });

      it('should update car and return 200 Authorized', async () => {
        const carId = "636069937389128f5c3efd7a";

        const token = await request(app)
        .post("/login")
        .send({
            email: "admin@admin.com",
            password: "admin123"
        });
        

        const res = await request(app)
            .put(`/update/${carId}/auto`)
            .set('Authorization', `Bearer ${token.body.token.token}`)
            .send({
                city:"Salvador - BA",
                name:"Prisma",
                brand: "Chevrolet",
                model: "1.4 MPFI LTZ 8V FLEX",
                year: "2020",
                km: "51.234 km",
                price:56000,
                image:"testeImg"
            });
            expect(res.status).toBe(200)
      });
      it('should update car and return 400 error', async () => {
        const carId = "636069937389128f5c3efd7a";

        const token = await request(app)
        .post("/login")
        .send({
            email: "admin@admin.com",
            password: "admin123"
        });

        const res = await request(app)
            .put(`/update/${carId}/auto`)
            .set('Authorization', `Bearer ${token.body.token.token}`)
            .send({
                city:"Salvador - BA",
                name:"Prisma",
                brand: "Chevrolet",
                model: "1.4 MPFI LTZ 8V FLEX",
                year: "2020",
                km: "51.234 km",
                price:"teste price",
                image:"testeImg"
            });
   
            expect(res.status).toBe(400)
      });
   
     
});