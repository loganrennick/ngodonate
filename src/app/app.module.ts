import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DonationLogComponent } from './donation-log/donation-log.component';
import { DonationTypeManagementComponent } from './donation-type-management/donation-type-management.component';
import { DonationStartComponent } from './donation-start/donation-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    DonationLogComponent,
    DonationTypeManagementComponent,
    DonationStartComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
