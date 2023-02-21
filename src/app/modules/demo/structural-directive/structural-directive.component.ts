import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {

  selector : number = 2;
  users : user[] = [
    {name : 'pol', age : 23},
    {name : 'pierre', age : 26},
    {name : 'jean', age : 38},
    {name : 'Bébur', age : 0},
    {name : 'Olivia', age : 32},
    {name : 'Benjamin', age : 38},
    {name : 'Gavin', age : 29}
  ]
  display : boolean = true;
  setDisplay(){
    this.display = !this.display
  }




}
export interface user{
  name : string,
  age : number
}
