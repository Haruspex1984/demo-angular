import {Component} from '@angular/core';
import {article, ExerciceService} from "../../../../shared/services/exerciceService/exercice.service";
import {user} from "../../../../shared/services/demo-service/demo.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    constructor(private _service: ExerciceService) {
    }

    name: string = '';
    quantity: number = 0;

    addArticle() {
        let article = this._service.articles.find(i => i.name == this.name)

        if (article) {
            article.quantity += this.quantity
            this.name = ''
            this.quantity = 0
        } else {
            let newArticle: article = {
                name: this.name,
                quantity: this.quantity
            }
            this._service.addArticle(newArticle)
            this.name = ''
            this.quantity = 0
        }


    }

}
