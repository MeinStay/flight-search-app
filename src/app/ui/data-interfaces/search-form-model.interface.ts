
/**
 * Interface for search form
 */
export interface ISearchForm {
  tripType: string;
  originCity: string;
  destinationCity: string;
  departureDate: Date;
  returnDate: Date;
  passengers: string;
  minFare: number;
  maxFare: number;
}
