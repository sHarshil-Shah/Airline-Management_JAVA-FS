import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  checkButton: boolean = false;

  ngOnInit(): void {
  }


  updateAirlineForm = new FormGroup({
    providerCode: new FormControl('', Validators.compose(
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]{3}$/)])),
    providerType: new FormControl({ value: '', disabled: true }, Validators.compose(
      [Validators.maxLength(13), Validators.required, Validators.pattern(/^[a-zA-Z]*$/)])),
  });

  airlineSubscription: Subscription = new Subscription;
  constructor(private airlineService: HttpClientAirlineService,
    private router: Router, private titleService: Title) {
    this.titleService.setTitle("Update Flight");
    this.checkButton = true;
  }


  checkAirline(event: any): void {
    if (this.updateAirlineForm.valid) {
      const providerCode = this.updateAirlineForm.get('providerCode');

      if (providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          if (data.length == 1) {
            this.updateAirlineForm.controls['providerType'].enable();
          } else {
            this.updateAirlineForm.controls['providerType'].disable();
          }
        });
      }
    }
  }

  checkType(event: any): void {
    const providerCode = this.updateAirlineForm.get('providerCode');
    const providerType = this.updateAirlineForm.get('providerType');

    if (providerCode && providerType) {
      this.airlineService.searchAirline(providerCode.value).subscribe(data => {
        if (data[0].providerType == providerType.value) {
          this.checkButton = true;
          alert('Can not update. Same details.');
        } else {
          this.checkButton = false;
        }
      });
    }
  }

  updateAirline() {
    if (this.updateAirlineForm.valid) {
      const providerCode = this.updateAirlineForm.get('providerCode');
      const providerType = this.updateAirlineForm.get('providerType');
      if (providerType && providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          this.airlineSubscription = this.airlineService.updateAirline(new Airline(data[0].id, data[0].providerName, data[0].providerCode, providerType.value)).subscribe();
        });
        alert('Flight modified successfully.');
        this.router.navigateByUrl("/");
      }
    }
  }
}