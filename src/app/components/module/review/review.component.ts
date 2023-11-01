import { Component } from '@angular/core';
import { from } from 'rxjs';
import { ReviewService } from 'src/app/core/services/Review.service';
import { CompanyService } from 'src/app/core/services/company.service';
import {Review}from 'src/app/core/models/review'
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviews:any[]=[];
selectedCompany:any
  companies:any[]=[];
  constructor(private reviewService: ReviewService,private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: any) => {

      this.companies = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("compan",this.companies)
    })
  }
  getByCompany():void{
    this.reviewService.getReviewsByCompany(this.selectedCompany).subscribe((data:any)=>{
      this.reviews=data;})
      console.log(this.reviews)

    
  }
}
