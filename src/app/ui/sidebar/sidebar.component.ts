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
    this.ngRadio.cast('searchFormData', searchForm);
  }

}
