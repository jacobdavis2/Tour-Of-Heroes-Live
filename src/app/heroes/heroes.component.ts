import { Component, OnInit } from '@angular/core';
import { HEROES, Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe( returnedHeroes => this.heroes = returnedHeroes );
  }

  onClick(hero: Hero) {
    this.messageService.add(`Clicked on ${hero.name}`);
    this.selectedHero = hero;
  }

}
