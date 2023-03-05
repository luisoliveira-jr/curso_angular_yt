import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = 'outro texto escrito em letras minusculas'

  today = new Date();
  ts = new Date().getTime();

  constructor() { }

  ngOnInit(): void {
  }

}
