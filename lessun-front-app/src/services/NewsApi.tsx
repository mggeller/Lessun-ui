import Axios from 'axios';
import { INewsPost } from '../domain/INewsPost';

export abstract class NewsApi {

    static getAll(): INewsPost[] {
        // const firstCourse = new SingleCourse("Piano Course", 15, "Short Desc", "Long Desc", 59, 0); 
        const firstCourse: INewsPost = {
            id: "00001", 
            title: "Piano News", 
            short_description: "Completely enhance an expanded array of internal or 'organic' sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.", 
            content: "Content", 
            comments: 5
        }; 
        const secondCourse: INewsPost = {
            id: "00002", 
            title: "School News", 
            short_description: "Completely enhance an expanded array of internal or 'organic' sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.", 
            content: "Content", 
            comments: 3
        };
        const thirdCourse: INewsPost = {
            id: "00003", 
            title: "Math News", 
            short_description: "Completely enhance an expanded array of internal or 'organic' sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.", 
            content: "Content", 
            comments: 2
        };
        const fourthCourse: INewsPost = {
            id: "00004", 
            title: "English News", 
            short_description: "Completely enhance an expanded array of internal or 'organic' sources for prospective models. Collaboratively unleash installed base strategic theme areas with accurate partnerships. Credibly disintermediate unique content through fully.", 
            content: "Content", 
            comments: 0
        };

        let finalList: INewsPost[] = [firstCourse, secondCourse, thirdCourse, fourthCourse];

        return finalList;
    }

    static getArticle(id: string): INewsPost | undefined {
        let news = NewsApi.getAll();

        let article = news.find(element => element.id == id);

        return article;
    }
}