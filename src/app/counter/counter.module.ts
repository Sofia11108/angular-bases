import { NgModule } from "@angular/core";

import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponent //componentes que pertenecen a este modulo
    ],
    exports: [ //mostrar componentes al mundo exterior o por fuera de este modulo de agrupación al que pertenece
        CounterComponent
    ]
})
export class CounterModule {

}

// los componentes son visibles o usables a nivel de modulo, por ello se deben importar si se van a utilizar en otro componente de un modulo diferente