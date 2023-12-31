import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '../services/auth';
import { environment } from '@environments/environment';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {

  constructor(private credentials: CredentialsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.credentials.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = request.url.startsWith(environment.baseUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    return next.handle(request);
  }


} 