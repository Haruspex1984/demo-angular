import {Component} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {

  user: user = {name: null, age: null};
  users: user[] = [];

  isEmpty: boolean = true;

  addUser() {
    const newUser: user = {name: this.user.name, age: this.user.age};
    this.users.push(newUser);
    this.setIsEmpty()
    this.user.name="";
    this.user.age=0;
  }

  clearList() {
    this.users.splice(0, this.users.length)
    this.setIsEmpty()

  }

  removeLastUser() {
    this.users.pop()
    this.setIsEmpty()

  }

  setIsEmpty() {
    if (this.users.length > 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  removeUser(id:number){
    this.users.splice(id,1)
  }


}

export interface user {
  name: string | null;
  age: number | null;
}
