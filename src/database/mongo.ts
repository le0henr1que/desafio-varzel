import * as dotenv from 'dotenv';
dotenv.config();

import {connect} from 'mongoose';


export const connectToMongoDb = async () => {
  await connect(`mongodb://${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || "27017"}/${process.env.DB_NAME || "Varzel-auto"}?authSource=admin`).catch(err => console.log(err, "Mongodb error connection"))
}
