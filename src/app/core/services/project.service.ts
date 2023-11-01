import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8005/SpringMVC/projects';

  constructor(private httpClient: HttpClient) {}

  getProjects() {
    return this.httpClient.get(`${this.baseUrl}/getprojectss`);
  }

  getTasks() {
    return this.httpClient.get(`${this.baseUrl}/gettasks`);
  }

  getTasksByProject(Pro_Name: string) {
    return this.httpClient.get(`${this.baseUrl}/gettaskspyproject/${Pro_Name}`);
  }

  getProjectByProName(Pro_Name: string) {
    return this.httpClient.get(
      `${this.baseUrl}/getprojectbyProName/${Pro_Name}`
    );
  }

  getProjectsByStatus(status: string) {
    return this.httpClient.get(`${this.baseUrl}/getprojectsbystatus/${status}`);
  }
}
