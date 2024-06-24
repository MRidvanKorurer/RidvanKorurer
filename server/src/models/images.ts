import mongoose from "mongoose";
import { IImages } from "../types/type";


const imagesSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
})


export default mongoose.model<IImages>("Images", imagesSchema);