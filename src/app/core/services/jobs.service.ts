import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url='http://localhost:8005/SpringMVC/controller';
  constructor(private httpclient:HttpClient) { }

  getJobs(){
    return this.httpclient.get(this.url+'/getJobs');
  }
}
