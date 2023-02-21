import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input()
    maVar!: string;

    @Output()
    monEvent : EventEmitter<string> = new EventEmitter<string>();

    emettreBonjour(){
        this.monEvent.emit("Bonjour")
    }

}
