import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];
  filteredProjects: any[] = [];
  nameFilter: string = '';
  statusFilter: string = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data: any) => {
      console.log(data);
      this.projects = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log('Fetched projects:', this.projects);
    });
  }
  fetchProjects() {
    this.projectService.getProjects().subscribe((data: any) => {
      this.projects = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
    });
  }

  // Example: Filter projects by name and status
  filterProjectsByNameAndStatus(
    Pro_Name: string,
    status: string,
    action: string
  ) {
    if (action == 'proname') {
      if (Pro_Name)
        this.projectService
          .getProjectByProName(Pro_Name)
          .subscribe((data: any) => {
            this.projects = data.map((item: any) => {
              const key = Object.keys(item)[0];
              return { ...item[key], id: key };
            });
          });
      else this.fetchProjects();
    } else if (action == 'status') {
      if (status)
        this.projectService
          .getProjectsByStatus(status)
          .subscribe((data: any) => {
            this.projects = data.map((item: any) => {
              const key = Object.keys(item)[0];
              return { ...item[key], id: key };
            });
          });
      else this.fetchProjects();
    } else {
      // Reset to all projects if no filters are applied
      this.fetchProjects();
    }
  }

  // Add the applyFilters method to the component
  applyFilters(action: string) {
    this.filterProjectsByNameAndStatus(
      this.nameFilter,
      this.statusFilter,
      action
    );
  }
}
