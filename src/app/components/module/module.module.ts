import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratComponent } from './contrat/contrat.component';
import { ReviewComponent } from './review/review.component';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModuleComponent,
    AboutComponent,
    ProfileComponent,
    CompaniesComponent,
    JobsComponent,

    HeaderComponent,
    FooterComponent,
    AnnouncmentsListComponent,
    AnnouncmentsViewlistComponent,
    AnnouncmentComponent,
    AnnouncmentFormComponent,
    CompaniesDetailComponent,
    JobComponent,
    ContratComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, ModuleRoutingModule, FormsModule],
})
export class ModuleModule {}
