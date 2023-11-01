import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import { AnnouncmentFormComponent } from './Announcments/announcment-form/announcment-form.component';
import { AnnouncmentsListComponent } from './Announcments/announcments-list/announcments-list.component';
import { AnnouncmentsViewlistComponent } from './Announcments/announcments-viewlist/announcments-viewlist.component';
import { AnnouncmentComponent } from './Announcments/announcment/announcment.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import { ContratComponent } from './contrat/contrat.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleComponent,
    children: [
      { path: '', component: AnnouncmentsListComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'company/:Name_Company', component: CompaniesDetailComponent },
      { path: 'jobs', component: JobsComponent },
      {
        path: 'Events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
      },
      { path: 'announcements', component: AnnouncmentsViewlistComponent },
      { path: 'contrats', component: ContratComponent },
      { path: 'reviews', component: ReviewComponent },
      { path: 'announcement/:id', component: AnnouncmentComponent },
      { path: 'announcements/create', component: AnnouncmentFormComponent },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule {}
