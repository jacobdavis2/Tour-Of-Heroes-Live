import { Component, OnInit } from '@angular/core';
import { HEROES, Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(hero: Hero) {
    this.selectedHero = hero;
  }

}
