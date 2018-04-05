import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getAllHeroes().subscribe(heroes => {
      this.heroes = heroes;
    })
  }

  add(name: string) {
    var len: number = name.length;
    var hero: object = {
      name: name,
      health: (len * 9) % 10,
      velocity: (len * 2) % 10,
      damage: (len * 7) % 10,
      image: (len * 3) % 10
    }
    this.heroService.createHero(hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

}
