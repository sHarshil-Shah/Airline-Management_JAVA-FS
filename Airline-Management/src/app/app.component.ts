import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientAirlineService } from './services/http-client-airline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airline-Management';
  constructor(private villainService: HttpClientAirlineService,
    private router: Router) { }
}

