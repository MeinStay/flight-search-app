import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICities } from '../../core/data-interfaces/cities.interface';
import { CoreHttpService } from '../../core/core-http.service';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {
  public citiesUrl = 'assets/data-json/airports.json';
  constructor(private coreHttpService: CoreHttpService) { }

  public getCities(): Observable<ICities[]> {
    return this.coreHttpService.get(this.citiesUrl);
  }
}
