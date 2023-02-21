import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DemoService {

    users : user[] = [];

    constructor() {
    }


    addUser(u : user){
        this.users.push(u)
    }

    removeUser(i : number){
        this.users.splice(i,1)
    }


}

export interface user {
    name: string,
    email: string
}
