import * as dotenv from 'dotenv';
dotenv.config();
import { app } from "./app";
import { connectToMongoDb } from "./database/mongo";
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './utils/Config/swagger.json'

const PORT = process.env.PORT || 5000; 

const createServer = async () => {
    // await connectToMongoDb();
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    app.listen(PORT, () => {
      console.log(`Running at ${PORT}`);
    })



}
createServer()
