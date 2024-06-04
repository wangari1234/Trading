import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from '../api-config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( public http: HttpClient ) {  }
  
  getdata():Observable<any>{
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY.key}`;
    const url1 = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=${API_KEY.key}`
    console.log(url);
    
    return this.http.get<any>(url)
  }
}
