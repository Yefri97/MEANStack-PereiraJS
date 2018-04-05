import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hero: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    var idHero = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroById(idHero).subscribe(hero => {
      this.hero = hero;
    })
  }

}
