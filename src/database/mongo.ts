import * as dotenv from 'dotenv';
dotenv.config();

import {connect} from 'mongoose';


export const connectToMongoDb = async () => {
  await connect(`mongodb+srv://leonardo:kiUs2E0eW8DEUUGo@cluster0.puymz.mongodb.net/?retryWrites=true&w=majority`).catch(err => console.log(err, "Mongodb error connection"))
}
