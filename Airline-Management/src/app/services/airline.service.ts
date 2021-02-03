import { Airline } from '../classes/airline';
import { Observable } from 'rxjs';

export abstract class AirlineService {
  airlinesUrl = 'api/airlines';

  abstract getAirlines(): Observable<Airline[]>;
  abstract getAirline(id: number): Observable<Airline>;
  abstract addAirline(providerName: string, providerCode: string, providerType: string): Observable<Airline>;
  abstract deleteAirline(airline: Airline | number): Observable<Airline>;
  // abstract searchAirline(term: string): Observable<Airline[]>;
  abstract updateAirline(airline: Airline): Observable<Airline>;
}
