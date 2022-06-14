import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('signin') || request.url.includes('signup')) {
      console.log('register/login detected');
      return next.handle(request);
    }

    let token = localStorage.getItem('token');

    let decoded: any = jwt_decode(token || '');

    if (token == null || token.length == 0) {
      this.router.navigate(['/api/auth/signin']);
    }

    request = request.clone({
      headers: request.headers.set('authorization', token || ''),
    });

    return next.handle(request);
  }
}
