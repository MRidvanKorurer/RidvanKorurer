import {Document} from "mongoose";


export interface IImages extends Document {
    _id?: string,
    url: string
}


export interface IProjects extends Document {
    _id?: string,
    url: string,
    images: string[],
    isActive: boolean,
    info: string
}


export interface IComments extends Document {
    _id?: string,
    avatar: string,
    text: string,
    rating: number,
}

export interface ILanguages extends Document {
    _id?: string,
    name: string,
    level: number,
    icon: string
}



export interface IMyInfo extends Document {
    _id?: string,
    info: string,
    email: string,
    github: string,
    linkedin: string
}

