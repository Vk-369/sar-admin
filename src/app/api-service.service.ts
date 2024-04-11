import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,

  ) { }

  apiCall(method:any,endPoint:any,body:any)
  {
    console.log("into the api call")
    return this.http.post<any>(`${method}`,body);

  }
}
