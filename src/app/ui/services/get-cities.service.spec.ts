import { TestBed } from '@angular/core/testing';
import { GetCitiesService } from './get-cities.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: GetCitiesService = TestBed.get(GetCitiesService);
    expect(service).toBeTruthy();
  });
});
