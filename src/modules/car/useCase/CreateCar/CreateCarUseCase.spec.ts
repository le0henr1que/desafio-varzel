// // import request from 'supertest';
// import { CreateCarUseCase } from './CreateCarUseCase';
// import nock from 'nock';
// import * as Mongo from '../../repositories/CreateCar/implementation/MongoCarRepositoryCreate';
// import { ICreateCarDTO } from "./CreateCarDTO";



// describe('POST /create/auto', () => {

//     jest.setTimeout(100000)
      
//   it('should create a new car', async () => {

  

//     const mongoCarsRepository = new Mongo.MongoCarsRepository()
//     const createCarUseCase = new CreateCarUseCase(mongoCarsRepository);

//     const carData: ICreateCarDTO = {
//         city:"Salvador - BA",
//         name:"Prisma",
//         brand: "Chevrolet",
//         model: "1.4 MPFI LTZ 8V FLEX",
//         year: "2020",
//         km: "51.234 km",
//         price:56000,
//         image:"testeImg"
//     }

//     const car = await createCarUseCase.execute(carData);

//     console.log(car)

//     expect(car).toHaveProperty("id")

//   });



// });

