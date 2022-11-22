import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const Api_Url=environment.Api_Url;
const Api_Key=environment.Api_Key;
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  place='Bellary'

  constructor(public httpClient:HttpClient) {
   
   }
 

 loadData(data:any){
   return this.httpClient.get(`${Api_Url}weather?q=${data}&appid=${Api_Key}`);
  }
}

