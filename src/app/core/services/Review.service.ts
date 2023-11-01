import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url='http://localhost:8005/SpringMVC/ReviewContrat';
  constructor(private httpclient:HttpClient) { }

  getReviews(){
    return this.httpclient.get(this.url+'/getreviews');
  }
getReviewsByCompany(company:string){
  return this.httpclient.get(this.url+`/getReviewsByCompany/${company}`)
}
}
