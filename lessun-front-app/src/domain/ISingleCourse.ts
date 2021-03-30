import { ITag } from "./ICourseTag";

export interface ISingleCourse {
    id: string;
    tag: string;
    title: string;
    duration: number;
    students: number;
    shortDescription: string;
    longDescription: string;
    price: number;
    rating: number;
    picturePath: string;
    tags: ITag[]
}