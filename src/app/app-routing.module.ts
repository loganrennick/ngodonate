import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationLogComponent } from './donation-log/donation-log.component';
import { DonationStartComponent } from './donation-start/donation-start.component';
import { DonationTypeManagementComponent } from './donation-type-management/donation-type-management.component';
import { GiftsComponent } from './gifts/gifts.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'donation-log', component: DonationLogComponent },
  { path: 'donation-start', component: DonationStartComponent },
  { path: 'donation-type-management', component: DonationTypeManagementComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
