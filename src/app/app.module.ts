import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, //componentes que pertenecen a este modulo
  ],
  imports: [        //import es para traerse modulos externos, de angular o los que creamos
    BrowserModule, //modulos que se están importando, porque los requiero acá
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [], //aquí servicios sino tuvieran la propiedad providedIn
  bootstrap: [AppComponent]
})
export class AppModule { }
