import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './shared/components/banner/banner.component';
import {DemoComponent} from './modules/demo/main/demo.component';
import {ExerciceComponent} from './modules/exercice/exercice/exercice.component';
import {BindingsComponent} from './modules/demo/bindings/bindings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesComponent} from './modules/demo/pipes/pipes.component';
import {TempPipe} from './shared/pipes/tempPipe/temp.pipe';
import {Exercice1Component} from './modules/exercice/exercice1/exercice1.component';
import {ChronoPipe} from './shared/pipes/chronoPipe/chrono.pipe';
import {ComponentDirectiveComponent} from './modules/demo/component-directive/component-directive.component';
import {StructuralDirectiveComponent} from './modules/demo/structural-directive/structural-directive.component';
import {Exercice2Component} from './modules/exercice/exercice2/exercice2.component';
import {InputOutputComponent} from './modules/demo/input-output/input-output.component';
import {ChildComponent} from './modules/demo/input-output/child/child.component';
import {ArticlesInputComponent} from './modules/exercice/exercice3/articles-input/articles-input.component';
import {ArticlesListeComponent} from './modules/exercice/exercice3/articles-liste/articles-liste.component';
import {MainComponent} from './modules/demo/services/main/main.component';
import {Table1Component} from './modules/demo/services/table1/table1.component';
import {Table2Component} from './modules/demo/services/table2/table2.component';
import {InputComponent} from './modules/exercice/exercice4/input/input.component';
import {ListeComponent} from './modules/exercice/exercice4/liste/liste.component';
import { FormComponent } from './modules/demo/form/form.component';


@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        DemoComponent,
        ExerciceComponent,
        BindingsComponent,
        PipesComponent,
        TempPipe,
        Exercice1Component,
        ChronoPipe,
        ComponentDirectiveComponent,
        StructuralDirectiveComponent,
        Exercice2Component,
        InputOutputComponent,
        ChildComponent,
        ArticlesInputComponent,
        ArticlesListeComponent,
        MainComponent,
        Table1Component,
        Table2Component,
        InputComponent,
        ListeComponent,
        FormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
