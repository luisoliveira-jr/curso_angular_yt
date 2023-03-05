import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Luis Oliveira';
  age: number = 31;
  hobbies = ['Ler', 'estudar', 'yoga'];
  moto = {
    nome: 'Tenere',
    Ano: 2010
  }


  constructor() { }

  ngOnInit(): void {
  }

}
