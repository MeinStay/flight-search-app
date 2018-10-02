import { TestBed } from '@angular/core/testing';
import { CoreHttpService } from './core-http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CoreHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: CoreHttpService = TestBed.get(CoreHttpService);
    expect(service).toBeTruthy();
  });
});
