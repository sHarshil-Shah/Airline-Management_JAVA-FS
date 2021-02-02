import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class airlineService {


  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getAirlines() {
    return this.httpClient.get(this.SERVER_URL + 'airlines');
  }

  public getairline(airlineId: number) {
    return this.httpClient.get(`${this.SERVER_URL + 'airlines'}/${airlineId}`);
  }
  public createairline(airline: {
    id: number, providerName: string,
    providerCode: string, providerType: string
  }) {
    return this.httpClient.post(`${this.SERVER_URL + 'airlines'}`, airline)
  }

  public deleteairline(airlineId: number) {
    return this.httpClient.delete(`${this.SERVER_URL + 'airlines'}/${airlineId}`)
  }
  public updateairline(airline: {  id: number, providerName: string,
    providerCode: string, providerType: string }) {
    return this.httpClient.put(`${this.SERVER_URL + 'airlines'}/${airline.id}`, airline)
  }
}
