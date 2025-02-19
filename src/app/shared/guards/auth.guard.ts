import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import validateToken from 'src/app/utils/validateToken';

@Injectable({ //means it is a service
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const boolVal = validateToken();

    if(boolVal){
      return true;
    } else{
      this.router.navigate(['']);
      return false;
    }
  }
  
}
