import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from "./modules/demo/main/demo.component";
import {ExerciceComponent} from "./modules/exercice/exercice/exercice.component";
import {BindingsComponent} from "./modules/demo/bindings/bindings.component";
import {PipesComponent} from "./modules/demo/pipes/pipes.component";

const routes: Routes = [
  {path:'demo',component:DemoComponent,children:[
      {path:'bindings',component:BindingsComponent},
      {path:'pipes',component:PipesComponent}
    ]},
  {path:'exercice',component:ExerciceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
