import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloFatecComponent } from './fatec-titulo/fatec-titulo.component';
import { CursosFatecComponent } from './fatec-cursos/fatec-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecTituloComponent,
    FatecCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
