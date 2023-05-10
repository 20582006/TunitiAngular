import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';

import { AddCourseComponent } from './course/add-course/add-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';

import { ViewCourseComponent } from './course/view-course/view-course.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { UpdateProvinceComponent } from './province/update-province/update-province.component';

import { AddTipPercentageComponent } from './tip-percentage/add-tip-percentage/add-tip-percentage.component';
import { UpdateTipPercentageComponent } from './tip-percentage/update-tip-percentage/update-tip-percentage.component';
import { AddCityComponent } from './city/add-city/add-city.component';

import { AddTitleComponent } from './title/add-title/add-title.component';
import { UpdateTitleComponent } from './title/update-title/update-title.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
import { UpdatePickupComponent } from './pickup-point/update-pickup/update-pickup.component';
import { AddPickupComponent } from './pickup-point/add-pickup/add-pickup.component';
import { AddHelpComponent } from './help/add-help/add-help.component';
import { UpdateHelpComponent } from './help/update-help/update-help.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { ViewUserRolesComponent } from './user-roles/view-user-roles/view-user-roles.component';
import { UpdateUserRolesComponent } from './user-roles/update-user-roles/update-user-roles.component';
import { AddUserRolesComponent } from './user-roles/add-user-roles/add-user-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminSignInComponent,
    HomeComponent,
    SettingsComponent,
    MessagesComponent,

    AddCourseComponent,
    UpdateCourseComponent,

    ViewCourseComponent,
    AddProvinceComponent,
    UpdateProvinceComponent,

    AddTipPercentageComponent,
    UpdateTipPercentageComponent,
    AddCityComponent,

    AddTitleComponent,
    UpdateTitleComponent,
    UpdateCityComponent,
    UpdatePickupComponent,
    AddPickupComponent,
    AddHelpComponent,
    UpdateHelpComponent,
    UpdateAdminComponent,
    ViewUserRolesComponent,
    UpdateUserRolesComponent,
    AddUserRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
