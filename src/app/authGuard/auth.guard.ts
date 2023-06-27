import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService,
    ) {}

  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/api/login-user']);
      return false;
    }
  }

}
