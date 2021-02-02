import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from "./data.service";
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineCreateComponent } from './airline-create/airline-create.component';
import { HttpClientModule } from '@angular/common/http';@NgModule({
  declarations: [
    AppComponent,
    AirlineListComponent,
    AirlineCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
