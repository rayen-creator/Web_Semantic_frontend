import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() company_name:any
  job:any
  stringWithUnderscores:string ="";
  constructor(private jobService:JobService) { }
  ngOnInit(): void {
     this.stringWithUnderscores = this.company_name.replace(/ /g, "_");
    if(this.stringWithUnderscores=="TechNex_Solutions,_Inc."){
      this.stringWithUnderscores=this.stringWithUnderscores.split(',')[0];
      console.log("dd",this.stringWithUnderscores)
    }
    this.jobService.getJobBycompany(this.stringWithUnderscores).subscribe((data:any) => {
      this.job = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("dd",this.job)
    })
  }

}
