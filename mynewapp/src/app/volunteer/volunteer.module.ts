import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';

@NgModule({
  declarations: [
    VolunteerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    VolunteerListComponent
  ]
})
export class VolunteerModule { }
