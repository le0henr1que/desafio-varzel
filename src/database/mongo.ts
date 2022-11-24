import * as dotenv from 'dotenv';
dotenv.config();

import {connect} from 'mongoose';


export const connectToMongoDb = async () => {
  await connect(``).catch(err => console.log(err, "Mongodb error connection"))
}
