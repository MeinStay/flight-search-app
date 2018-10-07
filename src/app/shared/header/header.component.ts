import { Component, OnInit } from '@angular/core';
import { NgRadio } from 'ng-radio';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isSidebarToggle: boolean = false;
  constructor(
    private ngRadio: NgRadio
  ) { }

  ngOnInit() {
    this.ngRadio.on('closeSideBar').subscribe((data: boolean) => {
      this.isSidebarToggle = data;
    });
  }

  /**
   * opens side bar in mobile view
   */
  public openSideBar(): void {
    this.isSidebarToggle = !this.isSidebarToggle;
    this.ngRadio.cast('openSideBar', this.isSidebarToggle);
  }

}
