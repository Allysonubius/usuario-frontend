import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoCacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // inclua o código da linha abaixo logo no início do método intercept
    request = request.clone({
      setHeaders :{
        'Cache-Control' : 'no-cache',
        Pragma: 'no-cache'
      },
    });

    return next.handle(request);
  }
}
