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
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

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
    UserEditComponent,
    PersonalInformationComponent,
    GiftsComponent,
    ShoppingCartComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
