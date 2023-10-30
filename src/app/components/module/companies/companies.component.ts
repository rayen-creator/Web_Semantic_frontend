import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/models/company';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: any) => {

      // Flatten the JSON objects and store them in an array
      this.companies = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("compan",this.companies)
    })
  }

}
