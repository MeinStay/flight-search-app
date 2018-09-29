import { Component, OnInit } from '@angular/core';
import { ISearchForm } from '../../shared/data-interfaces/search-form-model.interface';
import { SearchForm } from '../../shared/data-classes/search-form';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public searchForm: ISearchForm;
  constructor(
  ) {}

  /**
   * function to initialize component
   */
  ngOnInit() {
    // Initialize the form
    this.searchForm = new SearchForm();
  }

}
