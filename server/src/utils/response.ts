import { Response } from "express";
import {IImages} from "../types/type";

class IResponse {
    message: string | null;
    data: IImages | null;
    token?: string | null;

    constructor(message: string | null = null, data: IImages | null = null, token: string | null = null) {
        this.message = message;
        this.data = data;
        this.token = token
    }

    success(res: Response) {
        return res.status(200).json({
            success: true,
            message: this.message ?? "İşlem Başarılı",
            data: this.data,
            token: this.token
        })
    }

    created(res: Response) {
        return res.status(201).json({
            success: true,
            message: this.message ?? "Create İşlemi Başarılı",
            data: this.data,
            token: this.token
        })
    }

}


export default IResponse;