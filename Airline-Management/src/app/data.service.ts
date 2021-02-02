import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let airLines = [
      {
        id: 1, providerName: 'Jet Airways',
        providerCode: '9W-', providerType: 'Domestic'
      },
      {
        id: 2, providerName: 'Emirates',
        providerCode: 'EK-', providerType: 'International'
      }
    ];
    return { airLines };
  }
}