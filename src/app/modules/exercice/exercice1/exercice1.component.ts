import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit{

  time: number = 0;
  timer!: any;
  startIsClosed: boolean = false;


  startChrono() {

    this.startIsClosed = true;
    this.timer = setInterval(() => {
      this.time++
    }, 1000);
  }

  pauseChrono() {
    this.startIsClosed = false;
    clearInterval(this.timer);
  }

  resetChrono() {
    this.pauseChrono()
    this.time = 0;
  }

  ngOnInit(): void {
    console.log("Composant créé")
  }


}
