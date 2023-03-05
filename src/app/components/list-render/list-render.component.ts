import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  //Agora os dados de animals será localizado pelo serviceList
  animals: Animal[] = [];

  /* animals: Animal[] = [
    { name: 'Bob', type: 'Dog', age: 8 },
    { name: 'Red', type: 'Cat', age: 1 },
    { name: 'Sophie', type: 'Cat', age: 1 },
    { name: 'Geralt', type: 'Cat', age: 1 },
    { name: 'Cindy', type: 'Cat', age: 1 },
    { name: 'Pandora', type: 'Dog', age: 1 }
  ]; */

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `A idade do pet ${animal.name} é ${animal.age} ano(s)!`
  }

  removeAnimal(animal: Animal) {
    /* Antes sem usar requisição HTTP 
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal); */

    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();

  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
