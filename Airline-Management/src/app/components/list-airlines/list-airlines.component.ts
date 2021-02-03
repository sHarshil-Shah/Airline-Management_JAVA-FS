import { Component, OnInit } from '@angular/core';
import { HttpClientAirlineService } from 'src/app/services/http-client-airline.service';
import { Airline } from 'src/app/classes/airline';

@Component({
  selector: 'app-list-airlines',
  templateUrl: './list-airlines.component.html',
  styleUrls: ['./list-airlines.component.css']
})
export class ListAirlinesComponent implements OnInit {

  airlines: Airline[] = [];
 
  constructor(private airlineService: HttpClientAirlineService) { }
 
  ngOnInit() {
    this.getAirlines();
  }
 
  getAirlines() {
    this.airlineService.getAirlines().subscribe(data => { 
      this.airlines = data;
    });    
  }
}
