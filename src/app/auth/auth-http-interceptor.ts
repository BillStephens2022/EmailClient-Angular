import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      // need to clone the req because withCredentials property is 'readonly' on the req object
      withCredentials: true,
    });

    //when we call next, we get back an observable, so you can chain on other methods to do things to the observable (i.e. tap, filter)
    return next.handle(modifiedReq);
  }
}
