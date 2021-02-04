import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Airline } from 'src/app/classes/airline';
import { HttpClientAirlineService } from 'src/app/services/http-client-airline.service';

@Component({
  selector: 'app-modify-airlines',
  templateUrl: './modify-airlines.component.html',
  styleUrls: ['./modify-airlines.component.css']
})
export class ModifyAirlinesComponent implements OnInit {

  ngOnInit(): void {
  }


  updateAirlineForm = new FormGroup({
    providerCode: new FormControl(''),
    providerType: new FormControl('')
  });

  airlineSubscription: Subscription = new Subscription;
  constructor(private airlineService: HttpClientAirlineService,
    private router: Router, private titleService: Title) {
    this.titleService.setTitle("Update Flight");

  }

  updateAirline() {

    if (this.updateAirlineForm.valid) {
      const providerCode = this.updateAirlineForm.get('providerCode');
      const providerType = this.updateAirlineForm.get('providerType');
      if (providerType && providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          this.airlineSubscription = this.airlineService.updateAirline(new Airline(data[0].id, data[0].providerName, data[0].providerCode, providerType.value)).subscribe();
        });



        this.router.navigateByUrl("/");
      }
    }
  }
}
