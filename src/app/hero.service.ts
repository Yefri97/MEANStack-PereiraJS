import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  // Get all the heroes from the API
  getAllHeroes() {
    return this.http.get('/api/heroes');
  }

  // Get the hero with the ID
  getHeroById(id: string) {
    return this.http.get('/api/heroes/' + id);
  }

  // Create a hero
  createHero(hero: any) {
    return this.http.post('/api/heroes', {
      "name": hero.name,
      "health": hero.health,
      "velocity": hero.velocity,
      "damage": hero.damage,
      "image": hero.image
    });
  }

}
