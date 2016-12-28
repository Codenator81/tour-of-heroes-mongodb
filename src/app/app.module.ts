import {BrowserModule}            from '@angular/platform-browser';
import {NgModule}                 from '@angular/core';
import {FlexLayoutModule}         from '@angular/flex-layout';
import 'hammerjs';

import {AngularFireModule}        from 'angularfire2';

import {AppComponent}             from './app.component';
import {AppRoutingModule}         from "./app-routing.module";

import {DashboardComponent}       from "./hero/dashboard.component";
import {HeroDetailComponent}      from "./hero/hero-detail.component";
import {HeroesComponent}          from "./hero/heroes.component";
import {HeroService}              from "./services/hero.service";
import {firebaseConfig}           from "../environments/firebase.config";
import {HeroSearchComponent}      from './hero/hero-search/hero-search.component';
import {HeroNameDialogComponent}  from './hero/hero-name-dialog/hero-name-dialog.component';
import {PowerListComponent}       from "./power/power-list/power-list.component";
import {NewHeroComponent}         from './hero/new-hero/new-hero.component';
import {SharedModule} from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroNameDialogComponent,
    PowerListComponent,
    NewHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlexLayoutModule.forRoot(),
    SharedModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  entryComponents: [HeroNameDialogComponent]
})
export class AppModule {
}
