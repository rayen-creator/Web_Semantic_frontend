import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url='http://localhost:8005/SpringMVC/controller';
  constructor(private httpclient:HttpClient) { }

  getposts(){
    return this.httpclient.get(this.url+'/getblogs');
  }
}
