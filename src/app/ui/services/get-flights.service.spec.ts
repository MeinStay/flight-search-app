import { TestBed } from '@angular/core/testing';
import { GetFlightsService } from './get-flights.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetFlightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: GetFlightsService = TestBed.get(GetFlightsService);
    expect(service).toBeTruthy();
  });
});
