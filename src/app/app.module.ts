import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { DemoComponent } from './modules/demo/main/demo.component';
import { ExerciceComponent } from './modules/exercice/exercice/exercice.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { TempPipe } from './shared/pipes/temp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DemoComponent,
    ExerciceComponent,
    BindingsComponent,
    PipesComponent,
    TempPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
