import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //set the content type as application/json

    //here we need to modify the request
    //we cant modify existing requests
    //but we can use clone to work around that:
    //-----provide the new info to the cloned request
    //-----and send the new request to server instead

    //if content type is set then we shouldnt modify the request
    //solution: check that the content type header is set
    if (req.headers.has('content-type')) {
      return next.handle(req);
    } else {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    console.log('hello from interceptor');
    return next.handle(req);
  }
}
