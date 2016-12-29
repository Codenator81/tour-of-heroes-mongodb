import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './hero/dashboard.component';
import { HeroesComponent }      from './hero/heroes.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import {PowerListComponent} from "./power/power-list/power-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'powers',     component: PowerListComponent },
  { path: 'anim',       loadChildren: 'app/anim/anim.module#AnimModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
