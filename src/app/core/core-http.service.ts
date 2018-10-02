import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
  constructor(private http: HttpClient) { }

  /**
   * Method to get the cities from JSON
   */
  public get(url: string): Observable<any[]> {
    return this.http
      .get<any[]>(url)
      .pipe(map(data => data));
  }
}
