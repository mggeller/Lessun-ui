import Axios from 'axios';
import { ISingleCourse } from '../domain/ISingleCourse';

export abstract class CourseApi {

    static getAll(): ISingleCourse[] {
        const firstCourse: ISingleCourse = {id: "00001", title: "Piano Course", length: 15, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 59, rating: 0, picture_path: "/assets/images/paige-cody-7kck7rSl_Bo-unsplash.jpg"}; 
        const secondCourse: ISingleCourse = {id: "00002", title: "Guitar Course", length: 16, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 99, rating: 1, picture_path: "/assets/images/jacek-dylag-hUHzaiAHuUc-unsplash.jpg"};
        const thirdCourse: ISingleCourse = {id: "00003", title: "Math Matrix Course", length: 3, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 29, rating: 5, picture_path: "/assets/images/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg"};
        const fourthCourse: ISingleCourse = {id: "00004", title: "English Course", length: 8, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 75, rating: 3, picture_path: "/assets/images/ivan-shilov-ucUB9wxkPgY-unsplash.jpg"};

        let finalList: ISingleCourse[] = [firstCourse, secondCourse, thirdCourse, fourthCourse];

        return finalList;
    }

    static getCourse(id: string): ISingleCourse | undefined {
        let courses = CourseApi.getAll();

        let course = courses.find(element => element.id == id);

        return course;
    }
}