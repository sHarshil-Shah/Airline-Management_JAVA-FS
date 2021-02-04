import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { ListAirlinesComponent } from './components/list-airlines/list-airlines.component';
import { HttpClientAirlineService } from './services/http-client-airline.service';
import { CreateAirlinesComponent } from './components/create-airlines/create-airlines.component';
import { ModifyAirlinesComponent } from './components/modify-airlines/modify-airlines.component';
import { DeleteAirlinesComponent } from './components/delete-airlines/delete-airlines.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ListAirlinesComponent,
    CreateAirlinesComponent,
    ModifyAirlinesComponent,
    DeleteAirlinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule
  ],
  providers: [HttpClientAirlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
