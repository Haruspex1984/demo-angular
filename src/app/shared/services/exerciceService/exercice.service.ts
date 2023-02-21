import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExerciceService {

    articles: article[] = []

    addArticle(a: article) {

        this.articles.push(a)

    }

    deleteArticle(i: number) {
        this.articles.splice(i, 1)
    }


    constructor() {
    }
}


export interface article {
    name: string;
    quantity: number;
}
