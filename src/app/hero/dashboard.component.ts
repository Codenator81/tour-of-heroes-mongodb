import { Component, OnInit } from '@angular/core';

import { IHero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.visibleHeroes$
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}