import Images from "../models/images";
import {Request, Response} from "express";
import APIError from "../utils/error";
import IResponse from "../utils/response";
import { IImages } from "../types/type";


export const allImages = async (req: Request, res: Response) => {
    try {
        const images: IImages | any = await Images.find(); 

        return new IResponse("Resim Çekme İşlemi Başarılı", images).success(res);
    } catch (error) {
        throw new APIError("Resim Çekme İşlemi Başarısız", 400);
    }
}