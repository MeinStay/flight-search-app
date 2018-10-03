import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreHttpService } from '../../core/core-http.service';
import { IFlights } from '../data-interfaces/flights.interface';

@Injectable({
  providedIn: 'root'
})
export class GetFlightsService {

  public flightsUrl = 'assets/data-json/flights.json';
  constructor(private coreHttpService: CoreHttpService) { }

  public getFlights(): Observable<IFlights[]> {
    return this.coreHttpService.get(this.flightsUrl);
  }

}
