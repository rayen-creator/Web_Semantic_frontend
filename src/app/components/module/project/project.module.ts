import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, FormsModule],
})
export class ProjectModule {}
