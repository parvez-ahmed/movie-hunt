import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class DataProviderService {
  getUrl:string="http://localhost:8888/video";
  constructor(private http:Http) { }

  getData(){
   return this.http.get(this.getUrl).map((response:Response)=>response.json());
  }

}