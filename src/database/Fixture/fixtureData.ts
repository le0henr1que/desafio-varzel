import * as dotenv from "dotenv";
dotenv.config();
import { Cars, CarsSchema } from "../../modules/car/entities/CarSchema";
import { connectToMongoDb } from "../mongo";

const cars = [
  {
    city: "São Paulo - SP",
    name: "March",
    brand: "Nissan",
    model: "1.O 12V FLEX 4P MANUAL",
    year: "2017",
    km: "102.982 km",
    price: 49000,
  },
];



  connectToMongoDb();
  CarsSchema.create(cars, function (error: any, savedUsers: any) {
    if (error) {
      console.log(error);
      process.exit()
    } else {
      console.log(savedUsers);
      process.exit()
    }
  });
