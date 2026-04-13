import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // ✅ DIRECTLY READ FROM localStorage (BREAKS LOOP)
    const token = localStorage.getItem('X-AUTH-TOKEN');

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          'X-AUTH-TOKEN': token
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}