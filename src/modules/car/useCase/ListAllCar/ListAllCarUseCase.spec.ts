import request from 'supertest';
import { app } from '../../../../app';
import nock from 'nock';


describe('GET /list/auto', () => {
    jest.setTimeout(100000)
   
    it('should list all car and return 200', async () => {

        const res = await request(app)
            .get(`/list/auto`)
           
            expect(res.status).toBe(200)
      });
      it('should list all car and return 404', async () => {


        const res = await request(app)
            .get(`/list/auo`)
            expect(res.status).toBe(404)
      });
     
     
     
});