import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  revert = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if(this.revert) {
        this.contador --;
      } else {
        this.contador ++;
      }

      if(this.contador === 3) {
        this.revert = true;
      } else if(this.contador === 0) {
        this.revert = false;
      }
        
    }, 1000);
  }

}
