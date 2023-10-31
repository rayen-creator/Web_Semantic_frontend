import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/core/models/job';
import { JobService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs:any[] = [];
  constructor(private jobService:JobService){}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data:any)=>{
     this.jobs = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.warn("ff",this.jobs);

    })

  }

}
