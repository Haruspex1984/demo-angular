import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from "./modules/demo/main/demo.component";
import {ExerciceComponent} from "./modules/exercice/exercice/exercice.component";
import {BindingsComponent} from "./modules/demo/bindings/bindings.component";
import {PipesComponent} from "./modules/demo/pipes/pipes.component";
import {Exercice1Component} from "./modules/exercice/exercice1/exercice1.component";
import {ComponentDirectiveComponent} from "./modules/demo/component-directive/component-directive.component";
import {StructuralDirectiveComponent} from "./modules/demo/structural-directive/structural-directive.component";
import {Exercice2Component} from "./modules/exercice/exercice2/exercice2.component";
import {InputOutputComponent} from "./modules/demo/input-output/input-output.component";
import {ArticlesInputComponent} from "./modules/exercice/exercice3/articles-input/articles-input.component";
import {ArticlesListeComponent} from "./modules/exercice/exercice3/articles-liste/articles-liste.component";
import {MainComponent} from "./modules/demo/services/main/main.component";
import {InputComponent} from "./modules/exercice/exercice4/input/input.component";
import {ListeComponent} from "./modules/exercice/exercice4/liste/liste.component";
import {FormComponent} from "./modules/demo/form/form.component";

const routes: Routes = [
    {
        path: 'demo', component: DemoComponent, children: [
            {path: 'bindings', component: BindingsComponent},
            {path: 'pipes', component: PipesComponent},
            {path: 'component-directive', component: ComponentDirectiveComponent},
            {path: 'structural-directive', component: StructuralDirectiveComponent},
            {path: 'input-output', component: InputOutputComponent},
            {path: 'service',component: MainComponent},
            {path:'form',component: FormComponent}
        ]
    },
    {
        path: 'exercice', component: ExerciceComponent, children: [
            {path: 'exo1', component: Exercice1Component},
            {path: 'exo2', component: Exercice2Component},
            {
                path: 'exo3', component: ArticlesInputComponent, children: [
                    {path: 'exo4', component: ArticlesListeComponent}
                ]
            },
            {path: 'exo5',component: InputComponent,children:[
                    {path:'exo5bis',component: ListeComponent}
                ]}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
