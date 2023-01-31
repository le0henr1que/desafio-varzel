import { IUploadImage } from "../../repositories/UploadImageCar/IUploadImageCar";
import { Cars, CarsSchema} from "../../entities/CarSchema";
// import {diskStorage} from "multer";
import * as dotenv from 'dotenv';
dotenv.config();

export class UploadImageCarUseCase{

    constructor(
        private carRepositoryUploadImage: IUploadImage
    ){}

    async execute(id:string, fileName:any){
       
        const findId = await this.carRepositoryUploadImage.findById(id)
        console.log(findId)
        if(!findId){
            throw new Error('non-existent vehicle')
        }

        
        this.carRepositoryUploadImage.UploadImage(id, fileName);
    
        
    
    }
}