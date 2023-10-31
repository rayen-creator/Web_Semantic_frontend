import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.css']
})
export class CompaniesDetailComponent implements OnInit {
  Name_Company:any
  company:any
  constructor(
    private companyService:CompanyService,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.Name_Company=this.activatedRoute.snapshot.params['Name_Company'];
    console.log("Name_Company",this.Name_Company)
    if(this.Name_Company){
      this.companyService.getCompanybyname(this.Name_Company).subscribe((data:any) =>{
        this.company = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("Name_Company",this.company)

      })

    }
  }
  

}
