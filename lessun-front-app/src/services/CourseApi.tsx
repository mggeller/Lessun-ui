import Axios from 'axios';
import { IReview } from '../domain/IReview';
import { ISearchField } from '../domain/ISearchField';
import { ISingleCourse } from '../domain/ISingleCourse';

export abstract class CourseApi {
    private static axios = Axios.create(
        {
            baseURL: "http://localhost:8080/courses",
            headers: {
                common: {
                    'Content-Type': 'application/json'
                }
            }
        }
    )

    static async getAll(): Promise<ISingleCourse[]> {
        /*const firstCourse: ISingleCourse = {id: "1", tag: "Music", title: "Piano Course", length: 15, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 59, rating: 0, picture_path: "/assets/images/paige-cody-7kck7rSl_Bo-unsplash.jpg"}; 
        const secondCourse: ISingleCourse = {id: "2", tag: "Music", title: "Guitar Course", length: 16, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 99, rating: 1, picture_path: "/assets/images/jacek-dylag-hUHzaiAHuUc-unsplash.jpg"};
        const thirdCourse: ISingleCourse = {id: "3", tag: "Math", title: "Math Matrix Course", length: 3, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 29, rating: 5, picture_path: "/assets/images/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg"};
        const fourthCourse: ISingleCourse = {id: "4", tag: "Language", title: "English Course", length: 8, short_description: "Proactively parallel task vertical products for collaborative ideas. Monotonectally visualize functional functionalities vis-a-vis efficient products. Globally matrix bleeding-edge e-business with professional.", long_description: "Long Desc", price: 75, rating: 3, picture_path: "/assets/images/ivan-shilov-ucUB9wxkPgY-unsplash.jpg"};

        let finalList: ISingleCourse[] = [firstCourse, secondCourse, thirdCourse, fourthCourse];

        return finalList;*/

        const url = "";
        console.log(url);
        try {
            const response = await this.axios.get<ISingleCourse[]>(url);
            console.log('getAll response', response);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch (error) {
            console.log('error ', (error as Error).message);
            return [];
        }
    }

    static async getCourse(id: string): Promise<ISingleCourse | undefined> {
        /* let courses = CourseApi.getAll();

        let course = courses.find(element => element.id == id);

        return course;*/

        const url = "" + id;
        console.log(url);
        try {
            const response = await this.axios.get<ISingleCourse>(url);
            console.log('getCourse response', response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            console.log('error ', (error as Error).message);
            return undefined;
        }
    }

    static async searchByTitle(searchField: ISearchField): Promise<string> {
        const url = "";
        console.log(url);
        try {
            const response = await this.axios.post(url, searchField);
            if (response.status === 200) {
                return "";
            }
            return "";
        } catch (error) {
            console.log('error ', (error as Error).message);
            return "";
        }

    }

    static async putReview(review: IReview, id: string): Promise<string> {
        const url = "" + id;
        console.log(url);
        try {
            const response = await this.axios.put(url, review);
            console.log('create response', response);
            if (response.status === 200) {
                return "";
            }
            return "";
        } catch (error) {
            console.log('error ', (error as Error).message);
            return "";
        }

    }

}