import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISearchForm } from '../data-interfaces/search-form-model.interface';
import { SearchForm } from '../data-classes/search-form';
import { GetCitiesService } from '../services/get-cities.service';
import { ICities } from '../../core/data-interfaces/cities.interface';
import { NgRadio } from 'ng-radio';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public searchForm: ISearchForm;
  public cities: ICities[];
  public isOriginCitySelected: boolean = false;
  public isDestinationCitySelected: boolean = false;

  constructor(
    private getCitiesService: GetCitiesService,
    private ngRadio: NgRadio
  ) {}

  /**
   * function to initialize component
   */
  ngOnInit() {
    // Initialize the form
    this.searchForm = new SearchForm();
    // Get the cities in cities text boxes
    this.getCitiesService.getCities().subscribe((response: ICities[]) => {
      this.cities = response;
    });
    // Generate request body for form to search flight

  }

  public submitSearchForm(searchForm: ISearchForm): void {
    searchForm.departureDate = this.getFormattedDate(searchForm.departureDate);
    if (searchForm.returnDate !== '') {
      searchForm.returnDate = this.getFormattedDate(searchForm.returnDate);
    }
    this.ngRadio.cast('searchFormData', searchForm);
  }

  public getFormattedDate(date: string): string {
    const dateString = new Date(date);
    const month = dateString.getMonth() + 1;
    const day = dateString.getDate();
    const year = dateString.getFullYear();
    return (month <= 9 ? '0' + month : month) + '/' + (day <= 9 ? '0' + day : day ) + '/' + year;
}

}
