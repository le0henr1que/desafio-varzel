import request from 'supertest';
import { app } from '../../../../app';
import nock from 'nock';


describe('POST /create/auto', () => {
    jest.setTimeout(100000)
   

   
    it('should create car and return 200', async () => {

        const token = await request(app)
        .post("/login")
        .send({
            email: "admin@admin.com",
            password: "admin123"
        });
        
        const res = await request(app)
            .post(`/create/auto`)
            .send({
                image: "teste", 
                city:"teste",
                name:"teste",
                brand:"teste", 
                model:"teste", 
                year:"teste", 
                km:"teste", 
                price:12
            })
            .set('Authorization', `Bearer ${token.body.token.token}`)

            expect(res.status).toBe(201)
      });
     
     
   
    it('should create car and return 400', async () => {

        const token = await request(app)
        .post("/login")
        .send({
            email: "admin@admin.com",
            password: "admin123"
        });
        
        const res = await request(app)
            .post(`/create/auto`)
            .send({
                image: "teste", 
                city:"teste",
                name:"teste",
                brand:"teste", 
                model:"teste", 
                year:"teste", 
                km:"teste", 
                price:"teste"
            })
            .set('Authorization', `Bearer ${token.body.token.token}`)

            expect(res.status).toBe(400)
      });
     
     
});