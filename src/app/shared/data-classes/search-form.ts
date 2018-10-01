/**
 * Class for search form
 */
export class SearchForm {
  public tripType: string;
  public originCity: string;
  public destinationCity: string;
  public departureDate: string;
  public returnDate: string;
  public passengers: string;
  constructor() {
    this.tripType = 'oneway';
    this.originCity = '';
    this.destinationCity = '';
    this.departureDate = '';
    this.returnDate = '';
    this.passengers = '';
  }
}
