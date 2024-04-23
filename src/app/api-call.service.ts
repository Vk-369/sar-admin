import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http:HttpClient
  ) { }

  callApi(method:any)
  {
    // const url=this.
    switch(method)
    {
      case 'POST':
        return this.http.get(url)

    }
  }
}
