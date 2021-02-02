import { Component, OnInit } from '@angular/core';
import { airlineService } from './policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Airline-Management';
  airlines: any[] = [];
  constructor(private airlineService: airlineService) { }

  ngOnInit() {
    this.airlineService.getAirlines().subscribe((data: any) => {
      console.log(data);
      this.airlines = data;
    })
  }

  public deleteAirline(airlineId: any) {
    this.airlineService.deleteairline(airlineId).subscribe((ret: any) => {
      console.log("Airline deleted: ", ret);
    })
  }


  public updateAirline(airline: {
    id: number, providerName: string,
    providerCode: string, providerType: string
  }) {
    this.airlineService.updateairline(airline).subscribe((ret: any) => {
      console.log("Airline updated: ", ret);
    });
  }

  public createAirline(airline: {
    id: number, providerName: string,
    providerCode: string, providerType: string
  }) {
    this.airlineService.createairline(airline).subscribe((ret) => {
      console.log("Airline created: ", ret);
    });
  }
}