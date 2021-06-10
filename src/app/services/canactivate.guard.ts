import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(private router:Router, public authService: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isUserLoggedIn() && this.authService.IsUserAdmin) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        this.router.navigate([''],{ queryParams: { retUrl: route.url} });
        return false;
    
      }
      return true;
  }
  
}
