import { Router } from 'express';


const router = Router()

router.get('/public/auto', (request, response) => {

    response.send('deu bom');
})



export {router}