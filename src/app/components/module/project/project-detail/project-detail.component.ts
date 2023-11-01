import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: any = {};
  tasks: any[] = [];

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectName = this.activatedRoute.snapshot.params['pro_Name'];
    console.log(projectName);
    if (projectName) {
      // Fetch project details
      this.projectService
        .getProjectByProName(projectName)
        .subscribe((data: any) => {
          this.project = data[0];
          console.log('data 0 ', data[0]);
        });

      // Fetch tasks related to the project
      this.projectService
        .getTasksByProject(projectName)
        .subscribe((data: any) => {
          this.tasks = data.map((item: any) => {
            const key = Object.keys(item)[0];
            return { ...item[key], id: key };
          });
        });
    }
  }
}
