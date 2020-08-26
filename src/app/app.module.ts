import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { Gifscomponent } from './componentes/gifs/gifs.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import {  FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    Gifscomponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
