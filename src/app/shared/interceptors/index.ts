import {HeaderInterceptor} from './header.interceptor';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const httpInterceptors = [
  {
    provide: HTTP_INTERCEPTORS, //all interceptors will implement this class, angular handles injection of interc. as a service
    useClass: HeaderInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS, //all interceptors will implement this class, angular handles injection of interc. as a service
    useClass: ErrorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS, //all interceptors will implement this class, angular handles injection of interc. as a service
    useClass: TokenInterceptor,
    multi: true,
  },

];
