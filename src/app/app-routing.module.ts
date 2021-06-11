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
import { AdminGuard } from './services/admin.guard';
import { CanactivateGuard } from './services/canactivate.guard';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'donation-log', component: DonationLogComponent, canActivate: [AdminGuard] },
  { path: 'donation-start', component: DonationStartComponent, canActivate: [CanactivateGuard] },
  { path: 'donation-type-management', component: DonationTypeManagementComponent, canActivate: [AdminGuard] },
  { path: 'gifts', component: GiftsComponent, canActivate: [CanactivateGuard] },
  { path: 'personal-information', component: PersonalInformationComponent, canActivate: [CanactivateGuard] },
  { path: 'register', component: RegistrationComponent, canActivate: [AdminGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [CanactivateGuard] },
  { path: 'thank-you', component: ThankYouComponent, canActivate: [CanactivateGuard] },
  { path: 'user-edit/:id', component: UserEditComponent, canActivate: [AdminGuard] },
  { path: 'user-management', component: UserManagementComponent, canActivate: [AdminGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
