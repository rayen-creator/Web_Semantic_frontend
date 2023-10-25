import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AnnouncmentsListComponent } from './Announcments/announcments-list/announcments-list.component';


@NgModule({
  declarations: [
    ModuleComponent,
    AboutComponent,
    ProfileComponent,
    CompaniesComponent,
    JobsComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    AnnouncmentsListComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
