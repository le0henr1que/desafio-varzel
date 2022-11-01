import * as dotenv from 'dotenv';
dotenv.config();
import { app } from "./app";
import { connectToMongoDb } from "./database/mongo";

const PORT = process.env.PORT || 5000; 

const createServer = async () => {
    await connectToMongoDb();
    
    app.listen(PORT, () => {
      console.log(`Running at ${PORT}`);
    })



}
createServer()
