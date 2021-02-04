import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientAirlineService } from './services/http-client-airline.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airline-Management';
  constructor(private villainService: HttpClientAirlineService,
    private router: Router, private titleService:Title) {   this.titleService.setTitle("Home");
  }
}

