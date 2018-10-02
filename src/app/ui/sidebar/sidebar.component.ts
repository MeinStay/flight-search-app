import { Component, OnInit } from '@angular/core';
import { ISearchForm } from '../data-interfaces/search-form-model.interface';
import { SearchForm } from '../data-classes/search-form';
import { GetCitiesService } from '../services/get-cities.service';
import { ICities } from '../../core/data-interfaces/cities.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public searchForm: ISearchForm;
  public cities: ICities[];
  public isOriginCitySelected = false;
  public isDestinationCitySelected = false;
  constructor(
    private getCitiesService: GetCitiesService
  ) {}

  /**
   * function to initialize component
   */
  ngOnInit() {
    // Initialize the form
    this.searchForm = new SearchForm();
    this.getCitiesService.getCities().subscribe((response: ICities[]) => {
      this.cities = response;
    });
  }

}
