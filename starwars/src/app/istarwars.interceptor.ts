import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class IstarwarsInterceptor implements HttpInterceptor {

  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this.isReqeustCachable(request)) {
      return next.handle(request);
    }
    else {
      const url = request.url.toLowerCase();
      if (this.cacheMap.has(url)) {
        console.log('fetched from cache');
        return of(this.cacheMap.get(url) as HttpResponse<any>);
      }
      else {
        return next.handle(request).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              console.log('fetched from server');
              this.cacheMap.set(url, event);
            }
          })
        )
      }
    }

  }

  isReqeustCachable(req: HttpRequest<any>): boolean {
    // the reuest must the GET method
    if (req.method === 'GET') {
      // define all the cache partial URL
      const urls = ['json/india.json', 'json/usa.json'];
      // get the requets URL
      for (let i = 0; i < urls.length; i++) {
        if (req.url.toLowerCase().includes(urls[i].toLowerCase())) {
          return true;
        }
      }
    }

    return false;
  }
}
