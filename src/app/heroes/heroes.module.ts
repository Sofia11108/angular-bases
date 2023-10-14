import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //importar ngIf-ngFor en caso de que se necesite en un modulo diferente a app.module

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}