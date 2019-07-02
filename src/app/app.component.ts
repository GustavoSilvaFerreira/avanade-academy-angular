import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gustavo';
  
  items = ['1', '2', '3', '4', '5'];

  ngOnInit() {
    setTimeout(() => {
      this.title += " Ferreira";
    }, 2000);
  }

  novoItem() {
    const text = prompt('Digite um nome');

    this.items.push(text);
  }
}
