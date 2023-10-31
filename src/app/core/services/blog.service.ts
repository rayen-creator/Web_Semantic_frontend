import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url='http://localhost:8005/SpringMVC/blog';
  constructor(private httpclient:HttpClient) { }

  getposts(){
    return this.httpclient.get(this.url+'/getblogs');
  }
  getpostdetails(title: string){
    return this.httpclient.get(this.url+'/getBlogsbytitle/'+title);
  }
  getCommentsnypost(title: string){
    return this.httpclient.get(this.url+'/getcommentspypost/'+title);
  }
}
