import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISearchForm } from '../data-interfaces/search-form-model.interface';
import { SearchForm } from '../data-classes/search-form';
import { GetCitiesService } from '../services/get-cities.service';
import { ICities } from '../../core/data-interfaces/cities.interface';
import { NgRadio } from 'ng-radio';
import { Options, ChangeContext } from 'ng5-slider';

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
  public minDate: Date;
  public options: Options = {
    floor: 0,
    ceil: 10000,
    step: 1000,
    showTicks: true
  };

  constructor(
    private getCitiesService: GetCitiesService,
    private ngRadio: NgRadio
  ) {}

  /**
   * function to initialize component
   */
  ngOnInit() {
    this.minDate = new Date();
    // Initialize the form
    this.searchForm = new SearchForm();
    // Get the cities in cities text boxes
    this.getCitiesService.getCities().subscribe((response: ICities[]) => {
      this.cities = response;
    });
  }

  /**
   * function to submit all search form data
   * @param searchForm
   */
  public submitSearchForm(): void {
    // make return date null if the user switches option as oneway
    if (this.searchForm.tripType === 'oneway') {
      this.searchForm.returnDate = null;
    }
    this.ngRadio.cast('closeSideBar', false);
    this.ngRadio.cast('searchFormData', this.searchForm);
  }

  /**
   * function to format date in mm-dd-yyyy format
   * @param date
   */
  public getFormattedDate(date: string): string {
    const dateString = new Date(date);
    return dateString.getDay().toString();
  }

  /**
   * function to send slider values
   * @param changeContext
   */
  public onUserChangeEnd(changeContext: ChangeContext): void {
    this.searchForm.minFare = changeContext.value;
    this.searchForm.maxFare = changeContext.highValue;
    this.submitSearchForm();
  }
}
