import {Component} from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

    maValeur: string = "Ecrit dans le parent"
    messageEnfant: string = "";

    affecteValeur(valeur :string){
        this.messageEnfant = valeur
    }

}
