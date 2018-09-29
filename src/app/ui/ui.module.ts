import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [HomeComponent, SidebarComponent, ProductCardsComponent],
  exports: [HomeComponent]
})
export class UiModule { }
