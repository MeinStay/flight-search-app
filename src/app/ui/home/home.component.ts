import { Component, OnInit } from '@angular/core';
import { NgRadio } from 'ng-radio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isSideBarOpen: boolean;
  constructor(
    private ngRadio: NgRadio
  ) { }

  ngOnInit() {
    this.ngRadio.on('openSideBar').subscribe((data: boolean) => {
      this.isSideBarOpen = data;
    });
    this.ngRadio.on('closeSideBar').subscribe((data: boolean) => {
      this.isSideBarOpen = data;
    });
  }

}
