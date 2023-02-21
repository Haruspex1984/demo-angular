import {Component} from '@angular/core';
import {article, ExerciceService} from "../../../../shared/services/exerciceService/exercice.service";
import {user} from "../../../../shared/services/demo-service/demo.service";

@Component({
    selector: 'app-liste',
    templateUrl: './liste.component.html',
    styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

    constructor(private _service: ExerciceService) {
    }

    get articles(): article[] {
        return this._service.articles
    }


    deleteArticle(index: number) {
        this._service.deleteArticle(index)
    }

    removeArticle(index: number) {
        this._service.articles[index].quantity--
        if (this._service.articles[index].quantity == 0) {
            this._service.articles.splice(index, 1)
        }
    }


}
