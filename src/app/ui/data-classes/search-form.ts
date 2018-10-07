
/**
 * Class for search form
 */
export class SearchForm {
  public tripType: string;
  public originCity: string;
  public destinationCity: string;
  public departureDate: Date;
  public returnDate: Date;
  public passengers: string;
  public minFare: number;
  public maxFare: number;
  constructor() {
    this.tripType = 'oneway';
    this.originCity = '';
    this.destinationCity = '';
    this.departureDate = null;
    this.returnDate = null;
    this.passengers = '';
    this.minFare = 0;
    this.maxFare = 10000;
  }
}
