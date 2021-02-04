import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Airline } from 'src/app/classes/airline';
import { HttpClientAirlineService } from 'src/app/services/http-client-airline.service';

@Component({
  selector: 'app-delete-airlines',
  templateUrl: './delete-airlines.component.html',
  styleUrls: ['./delete-airlines.component.css']
})
export class DeleteAirlinesComponent implements OnInit {


  deleteAirlineForm = new FormGroup({
    providerCode: new FormControl(''),
    providerType: new FormControl('')
  });

  airlineSubscription: Subscription = new Subscription;
  constructor(private airlineService: HttpClientAirlineService,
    private router: Router, private titleService: Title) {
    this.titleService.setTitle("Delete Flight");

  }

  deleteAirline() {

    if (this.deleteAirlineForm.valid) {
      const providerCode = this.deleteAirlineForm.get('providerCode');
      const providerType = this.deleteAirlineForm.get('providerType');

      if (providerType && providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          if (data[0].providerType === providerType.value)
            this.airlineSubscription = this.airlineService.deleteAirline(data[0].id).subscribe();
        });

        this.router.navigateByUrl("/");
      }
    }
  }
  ngOnInit(): void {
  }

}
