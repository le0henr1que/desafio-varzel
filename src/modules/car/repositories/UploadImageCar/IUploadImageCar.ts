import { Cars } from "../../entities/CarSchema";

export interface IUploadImage{
    UploadImage(id:string, imagePath:string): Promise<any>;
}