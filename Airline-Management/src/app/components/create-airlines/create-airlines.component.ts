import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientAirlineService } from 'src/app/services/http-client-airline.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-airlines',
  templateUrl: './create-airlines.component.html',
  styleUrls: ['./create-airlines.component.css']
})
export class CreateAirlinesComponent implements OnDestroy {


  createAirlineForm = new FormGroup({
    providerName: new FormControl('', Validators.compose(
      [Validators.maxLength(10), Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)])),
    providerCode: new FormControl({ value: '', disabled: true }),
    providerType: new FormControl('', Validators.compose(
      [Validators.maxLength(13), Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]))
  });

  airlineSubscription: Subscription = new Subscription;
  constructor(private titleService: Title, private airlineService: HttpClientAirlineService,
    private router: Router) {
    this.titleService.setTitle("Create Flight");

    const providerCode = this.createAirlineForm.get('providerCode');
    if (providerCode)
      providerCode.disable();
  }

  ngOnDestroy(): void {
    if (this.airlineSubscription) {
      this.airlineSubscription.unsubscribe();
    }
  }
  createAirline() {

    if (this.createAirlineForm.valid) {
      const providerName = this.createAirlineForm.get('providerName');
      const providerCode = this.createAirlineForm.get('providerCode');
      const providerType = this.createAirlineForm.get('providerType');
      if (providerName && providerType && providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          if (data.length > 0){
            alert('Unsuccessful! Flight with Provider Code "' + providerCode.value + '" already exists');
          }else{        
            this.airlineSubscription = this.airlineService.addAirline(providerName.value, providerCode.value, providerType.value).subscribe();
            alert("Airline added successfully");
            this.router.navigateByUrl("/");
          }
        });
      }
    }
  }

  public setCode(event: any): void {  // event will give you full breif of action
    const providerCode = this.createAirlineForm.get('providerCode');

    const newVal = event.value;

    if (providerCode) {
      if (newVal === "INDIGO") {
        providerCode.setValue("6E-");
      } else if (newVal === "SPICEJET") {
        providerCode.setValue("SG-");
      }
      else if (newVal === "AIR INDIA") {
        providerCode.setValue("AI-");
      } else if (newVal === "GO AIR") {
        providerCode.setValue("G8-");
      } else if (newVal === "AIR ASIA") {
        providerCode.setValue("I5-");
      } else if (newVal === "JET AIRWAYS") {
        providerCode.setValue("9W-");
      } else if (newVal === "EMIRATES") {
        providerCode.setValue("EK-");
      }
    }
  }
}
