import { Component, OnInit } from '@angular/core';
import { GetFlightsService } from '../services/flights.service';
import { IFlights } from '../data-interfaces/flights.interface';
import { ISearchForm } from '../data-interfaces/search-form-model.interface';
import { NgRadio } from 'ng-radio';
import { ChangeContext } from 'ng5-slider';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  // variable to keep all the flights from response
  public flights: IFlights[];
  // variable to display the flights after operations
  public displayFlights: IFlights[];
  public fromDate: string[] = [];
  public toDate: string[] = [];
  constructor(
    private getFlightsService: GetFlightsService,
    private ngRadio: NgRadio
  ) { }

  ngOnInit() {
    this.getFlightsService.getFlights().subscribe((response: IFlights[]) => {
      this.flights = response;
      // assigning all the flights here
      this.displayFlights = this.flights;
    });

    this.ngRadio.on('searchFormData').subscribe((flightSearchFields: ISearchForm) => {
      // filtered flights by search form are assigned here
      this.displayFlights = this.getFlightBySearchFields(flightSearchFields);
      this.fromDate = flightSearchFields.departureDate.split('/');
      this.toDate = flightSearchFields.returnDate ? flightSearchFields.returnDate.split('/') : [];
    });

    this.ngRadio.on('sliderValues').subscribe((price: ChangeContext) => {
      // filtered flights by price are assigned here
      this.displayFlights = this.getFlightsByPrice(price);
    });

  }

  /**
   * function to get flights by search form fields
   * @param flightSearchFields
   */
  public getFlightBySearchFields(flightSearchFields: ISearchForm): IFlights[] {
    return this.flights.filter((item: IFlights) => {
      return item.origin_city === flightSearchFields.originCity
      && item.destination_city === flightSearchFields.destinationCity
      && item.from_date === flightSearchFields.departureDate
      && item.to_date === flightSearchFields.returnDate;
    });
  }

  /**
   * function to get the flights by price using slider
   * @param price
   */
  public getFlightsByPrice(price: ChangeContext): IFlights[] {
    return this.flights.filter((item: IFlights) => {
      return Number(item.fare) >= price.value && Number(item.fare) <= price.highValue;
    });
  }

}
