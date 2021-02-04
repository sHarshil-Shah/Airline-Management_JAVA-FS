import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Airline } from '../classes/airline';
import { AirlineService } from './airline.service';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable()
export class HttpClientAirlineService extends AirlineService {

  constructor(private http: HttpClient) {
    super();
  }

  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.airlinesUrl).pipe(
      catchError(this.handleError)
    );
  }

  // get by id - will 404 when id not found
  getAirline(id: number): Observable<Airline> {
    const url = `${this.airlinesUrl}/${id}`;
    return this.http.get<Airline>(url).pipe(
      catchError(this.handleError)
    );
  }

  getAirlineByCode(providerCode: string): Observable<Airline> {
    const url = `${this.airlinesUrl}/${providerCode}`;
    return this.http.get<Airline>(url).pipe(
      catchError(this.handleError)
    );
  }

  addAirline(providerName: string, providerCode: string, providerType: string): Observable<Airline> {
    const airline = { providerName, providerCode, providerType };

    return this.http.post<Airline>(this.airlinesUrl, airline, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteAirline(airline: number | Airline): Observable<Airline> {
    const id = typeof airline === 'number' ? airline : airline.id;
    const url = `${this.airlinesUrl}/${id}`;

    return this.http.delete<Airline>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  searchAirline(providerCode: string): Observable<Airline[]> {
    providerCode = providerCode.trim();
    // add safe, encoded search parameter if providerCode is present
    const options = providerCode ?
      { params: new HttpParams().set('providerCode', providerCode) } : {};

    return this.http.get<Airline[]>(this.airlinesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  searchAirlineByType(providerType: string): Observable<Airline[]> {
    providerType = providerType.trim();
    // add safe, encoded search parameter if providerCode is present
    const options = providerType ?
      { params: new HttpParams().set('providerType', providerType) } : {};

    return this.http.get<Airline[]>(this.airlinesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  updateAirline(airline: Airline): Observable<Airline> {
    return this.http.put<Airline>(this.airlinesUrl, airline, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
