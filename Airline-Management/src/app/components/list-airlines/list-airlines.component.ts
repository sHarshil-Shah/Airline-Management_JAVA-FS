import { Component, OnInit } from '@angular/core';
import { HttpClientAirlineService } from 'src/app/services/http-client-airline.service';
import { Airline } from 'src/app/classes/airline';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-airlines',
  templateUrl: './list-airlines.component.html',
  styleUrls: ['./list-airlines.component.css']
})
export class ListAirlinesComponent implements OnInit {

  airlines: Airline[] = [];

  constructor(private titleService: Title, private airlineService: HttpClientAirlineService) {
    this.titleService.setTitle("View Flights");
  }
  listAirlineForm = new FormGroup({
    providerType: new FormControl('')
  });

  ngOnInit() {
    this.getAirlines();
  }

  getAirlines() {
    const providerType = this.listAirlineForm.get('providerType');
    if(providerType)
    this.airlineService.searchAirlineByType(providerType.value).subscribe(data => {
      this.airlines = data;
    });
  }

  public filter(event: any): void {
    this.getAirlines();
  }
}
