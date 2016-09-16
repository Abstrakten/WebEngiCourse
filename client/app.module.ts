import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';
import { AppComponent }             from './app.component';
import { routing } from "./app.routes";
import { MainComponent } from "./components/main/main.component";
import { NotFoundComponent } from "./components/notFound/notFound.component";
import { SecoundComponent } from "./components/secound/secound.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    SecoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }






/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
