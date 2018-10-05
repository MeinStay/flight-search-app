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
  public minValue: number = 1000;
  public maxValue: number = 10000;
  public options: Options = {
    floor: 0,
    ceil: 10000,
    step: 1000,
    showTicks: true
  };
  @Output()
  public closeSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

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
  }

  public submitSearchForm(searchForm: ISearchForm): void {
    this.closeSideBar.emit(false);
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
    return (
      (month <= 9 ? '0' + month : month) +
      '/' +
      (day <= 9 ? '0' + day : day) +
      '/' +
      year
    );
  }

  public onUserChangeEnd(changeContext: ChangeContext): void {
    this.ngRadio.cast('sliderValues', changeContext);
  }
}
