import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FilterPipe],
  exports: [HeaderComponent, FilterPipe]
})
export class SharedModule { }
