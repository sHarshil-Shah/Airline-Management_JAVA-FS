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

  checkButton: boolean = false;


  deleteAirlineForm = new FormGroup({
    providerCode: new FormControl(''),
    providerType: new FormControl('')
  });

  airlineSubscription: Subscription = new Subscription;
  constructor(private airlineService: HttpClientAirlineService,
    private router: Router, private titleService: Title) {
    this.titleService.setTitle("Delete Flight");
    this.checkButton = true;
  }




  checkAirline(event: any): void {
    if (this.deleteAirlineForm.valid) {
      const providerCode = this.deleteAirlineForm.get('providerCode');

      if (providerCode) {
        this.airlineService.searchAirline(providerCode.value).subscribe(data => {
          if (data.length == 1) {
            this.deleteAirlineForm.controls['providerType'].enable();
          } else {
            this.deleteAirlineForm.controls['providerType'].disable();
          }
        });
      }
    }
  }

  checkType(event: any): void {
    const providerCode = this.deleteAirlineForm.get('providerCode');
    const providerType = this.deleteAirlineForm.get('providerType');

    if (providerCode && providerType) {
      this.airlineService.searchAirline(providerCode.value).subscribe(data => {
        if (data[0].providerType != providerType.value) {
          this.checkButton = true;
          alert('Can not delete. Diffrent details.');
        } else {
          this.checkButton = false;
        }
      });
    }
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

        alert('Deleted Successfully.');
        this.router.navigateByUrl("/");
      }
    }
  }
  ngOnInit(): void {
  }

}
