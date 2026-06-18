import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './home/home-list/home-list.component';
import { AboutListComponent } from './about/about-list/about-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ImpactListComponent } from './impact/impact-list/impact-list.component';
import { VolunteerListComponent } from './volunteer/volunteer-list/volunteer-list.component';

const routes: Routes = [
  { path: '', component: HomeListComponent },
  { path: 'about', component: AboutListComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'impact', component: ImpactListComponent },
  { path: 'volunteer', component: VolunteerListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}