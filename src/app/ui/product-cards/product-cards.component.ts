import { Component, OnInit, Input } from '@angular/core';
import { GetFlightsService } from '../services/flights.service';
import { IFlights } from '../data-interfaces/flights.interface';
import { ISearchForm } from '../data-interfaces/search-form-model.interface';
import { NgRadio } from 'ng-radio';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  public flights: IFlights[];
  @Input() public flightSearchFields: ISearchForm;
  constructor(
    private getFlightsService: GetFlightsService,
    private ngRadio: NgRadio
  ) { }

  ngOnInit() {
    this.getFlightsService.getFlights().subscribe((response: IFlights[]) => {
      this.flights = response;
    });

    this.ngRadio.on('searchFormData').subscribe((flightSearchFields: ISearchForm) => {
      this.flights = this.getFlightBySearchFields(flightSearchFields);
    });

  }

  public getFlightBySearchFields(flightSearchFields: ISearchForm): IFlights[] {
    return this.flights.filter((item: IFlights) => {
      return item.origin_city === flightSearchFields.originCity
      && item.destination_city === flightSearchFields.destinationCity
      && (item.from_date === flightSearchFields.departureDate
      || item.to_date === flightSearchFields.returnDate);
    });
  }

}
