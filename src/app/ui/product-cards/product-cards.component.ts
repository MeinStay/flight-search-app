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
  public fromDate: Date;
  public toDate: Date;
  public route: string;
  public isReturnDate: boolean = false;
  constructor(private getFlightsService: GetFlightsService, private ngRadio: NgRadio) {}

  ngOnInit() {
    this.getFlightsService.getFlights().subscribe((response: IFlights[]) => {
      this.flights = response;
      // assigning all the flights here
      this.displayFlights = this.flights;
    });

    this.ngRadio.on('searchFormData').subscribe((flightSearchFields: ISearchForm) => {
      if (flightSearchFields.returnDate !== null) {
        this.isReturnDate = true;
      } else {
        this.isReturnDate = false;
      }
      this.route =
        flightSearchFields.originCity +
        ' > ' +
        flightSearchFields.destinationCity +
        (this.isReturnDate ? ' > ' + flightSearchFields.originCity : '');
      // filtered flights by search form are assigned here
      this.displayFlights = this.getFlightBySearchFields(flightSearchFields);
      this.fromDate = flightSearchFields.departureDate;
      this.toDate = flightSearchFields.returnDate;
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
    if (this.isReturnDate) {
      return this.flights.filter((item: IFlights) => {
        return this.getReturnFlights(item, flightSearchFields);
      });
    } else {
      return this.flights.filter((item: IFlights) => {
        return this.getDepartFlights(item, flightSearchFields);
      });
    }
  }

  public getReturnFlights(flight: IFlights, searchFields: ISearchForm): Boolean {
    return (
      ((flight.origin_city === searchFields.originCity && flight.destination_city === searchFields.destinationCity) ||
        (flight.origin_city === searchFields.destinationCity && flight.destination_city === searchFields.originCity)) &&
      flight.days.indexOf(searchFields.departureDate.getDay().toString()) !== -1 &&
      flight.days.indexOf(searchFields.returnDate.getDay().toString()) !== -1 &&
      Number(flight.fare) >= searchFields.minFare &&
      Number(flight.fare) <= searchFields.maxFare
    );
  }

  public getDepartFlights(flight: IFlights, searchFields: ISearchForm): Boolean {
    return (
      flight.origin_city === searchFields.originCity &&
      flight.destination_city === searchFields.destinationCity &&
      flight.days.indexOf(searchFields.departureDate.getDay().toString()) !== -1 &&
      Number(flight.fare) >= searchFields.minFare &&
      Number(flight.fare) <= searchFields.maxFare
    );
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
