import { Component } from '@angular/core';
import {DemoService, user} from "../../../../shared/services/demo-service/demo.service";

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {

    constructor(private _demoService : DemoService) {
    }

    get users() : user[]{
        return this._demoService.users
    }

    removeUser(i : number){
        this._demoService.removeUser(i)
    }

}
