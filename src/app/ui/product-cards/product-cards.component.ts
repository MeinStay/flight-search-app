import { Component, OnInit } from '@angular/core';
import { GetFlightsService } from '../services/get-flights.service';
import { IFlights } from '../data-interfaces/flights.interface';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  public flights: IFlights[];
  constructor(private getFlightsService: GetFlightsService) { }

  ngOnInit() {
    this.getFlightsService.getFlights().subscribe((response: IFlights[]) => {
      this.flights = response;
    });
  }

}
