import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutListComponent } from './about-list/about-list.component';

@NgModule({
  declarations: [
    AboutListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutListComponent
  ]
})
export class AboutModule { }
