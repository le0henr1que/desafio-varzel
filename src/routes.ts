import { Router } from 'express';
import { createCarController } from './modules/car/useCase/CreateCar/index';


const router = Router()

router.post('/create/auto', (request, response) => {
    return createCarController.handle(request, response);
})


export {router}