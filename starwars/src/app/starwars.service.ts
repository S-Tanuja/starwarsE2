import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public http :HttpClient) { }

getchar(url:any){
  return this.http.get(url);
}

getfilms(url:any){
  return this.http.get(url);
}
getplanets(url:any){
  return this.http.get(url);
}
getspecies(url:any){
  return this.http.get(url);
}
getstarships(url:any){
  return this.http.get(url);
}
getvehicles(url:any){
  return this.http.get(url);
}
}
