import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ProjectModule } from './project/project.module';
import { ImpactModule } from './impact/impact.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProjectModule,
    ImpactModule,
    VolunteerModule,
    SharedModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule {}