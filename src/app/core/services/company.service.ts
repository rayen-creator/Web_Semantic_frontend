import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url='http://localhost:8005/SpringMVC/controller';
  constructor(private httpclient:HttpClient) { }

  getCompanies(){
    return this.httpclient.get(this.url+'/getcompany');
  }
}
