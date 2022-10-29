import { Router } from 'express';
import { createCarController } from './modules/car/useCase/CreateCar/index';
import { listAllCarController } from './modules/car/useCase/ListAllCar/index';
import { listByIdCarController } from './modules/car/useCase/ListById/index';
import { deleteCarController } from './modules/car/useCase/DeleteCar/index';
import { updateCarController } from './modules/car/useCase/UpdateCar/index';

import { createUserController } from './modules/user/useCase/RegisterNewUser/Index';


const router = Router()

router.post('/create/auto', (request, response) => {
    return createCarController.handle(request, response);
})

router.get('/list/auto', (request, response) => {
    return listAllCarController.handle(response);
})

router.get('/list/:id/auto', (request, response) => {
    return listByIdCarController.handle(request, response);
})

router.delete('/delete/:id/auto', (request, response) => {
    return deleteCarController.handle(request, response);
})

router.put('/update/:id/auto', (request, response) => {
    return updateCarController.handle(request, response);
})


router.post('/register/user', (request, response) => {
    return createUserController.handle(request, response);
})





export {router}