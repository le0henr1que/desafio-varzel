import * as dotenv from 'dotenv';
dotenv.config();


import {connect, Mongoose} from 'mongoose';


export const connectToMongoDb =  async () => {
  await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.puymz.mongodb.net/?retryWrites=true&w=majority`)
      .then(x => {
          console.log(
              `Connected to Mongo! Database name: "${x.connections[0].name}"`,
          );
      })
      .catch(err => {
          console.error('Error connecting to mongo', err);
      });
  return connect;
};

