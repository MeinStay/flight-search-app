/**
 * Interface for flights data
 */
export interface IFlights {
  flight_code: string;
  origin_city: string;
  destination_city: string;
  fare: string;
  departure_time: string;
  arrival_time: string;
  from_date: string;
  to_date: string;
}
