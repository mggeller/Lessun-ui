import Axios from 'axios';
import { ISingleCourse } from '../domain/ISingleCourse';
import { SingleCourse } from '../domain/SingleCourse';

export abstract class CourseApi {

    static getAll(): ISingleCourse[] {
        // const firstCourse = new SingleCourse("Piano Course", 15, "Short Desc", "Long Desc", 59, 0); 
        const firstCourse: ISingleCourse = {id: "00001", title: "Piano Course", length: 15, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 59, rating: 0}; 
        const secondCourse: ISingleCourse = {id: "00002", title: "Guitar Course", length: 16, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 99, rating: 1};
        const thirdCourse: ISingleCourse = {id: "00003", title: "Math Course", length: 3, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 29, rating: 5};
        const fourthCourse: ISingleCourse = {id: "00004", title: "English Course", length: 8, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 75, rating: 3};

        let finalList: ISingleCourse[] = [firstCourse, secondCourse, thirdCourse, fourthCourse];

        return finalList;
    }

    static getCourse(id: string): ISingleCourse | undefined {
        let courses = CourseApi.getAll();

        let course = courses.find(element => element.id == id);

        return course;
    }
}