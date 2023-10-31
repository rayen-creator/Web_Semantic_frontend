import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import { AnnouncmentFormComponent } from "./Announcments/announcment-form/announcment-form.component";
import { AnnouncmentsListComponent } from './Announcments/announcments-list/announcments-list.component';
import { AnnouncmentsViewlistComponent } from './Announcments/announcments-viewlist/announcments-viewlist.component';
import { AnnouncmentComponent } from './Announcments/announcment/announcment.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';

const routes: Routes = [

  {
    path: '',
    component: ModuleComponent,
    children: [
      { path: '', component: AnnouncmentsListComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'company/:Name_Company', component: CompaniesDetailComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'Events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      { path: 'announcements', component: AnnouncmentsViewlistComponent },
      { path: 'announcement/:id', component: AnnouncmentComponent },
      { path: 'announcements/create', component: AnnouncmentFormComponent },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }

    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
