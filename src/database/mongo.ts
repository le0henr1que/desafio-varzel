import * as dotenv from "dotenv";
dotenv.config();

import { Cars, CarsSchema } from "../modules/car/entities/CarSchema";

import { connect, Mongoose } from "mongoose";
// import { cars } from "./fixtureData";

const mongoUri = process.env.MONGO_URI || `mongodb://${process.env.DB_HOST}:27017/AutoPark`;

export const connectToMongoDb = async () => {
  await connect(mongoUri)
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );

      
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });
  return connect;
};
