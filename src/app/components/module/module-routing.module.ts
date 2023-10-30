import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import { AnnouncmentsListComponent } from "./Announcments/announcments-list/announcments-list.component";
import { AnnouncmentsViewlistComponent } from "./Announcments/announcments-viewlist/announcments-viewlist.component";
import { AnnouncmentComponent } from "./Announcments/announcment/announcment.component";
import { AnnouncmentFormComponent } from "./Announcments/announcment-form/announcment-form.component";
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [

  {
    path: '',
    component: ModuleComponent,
    children: [
      { path: '', component: AnnouncmentsListComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'Events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      { path: 'announcements', component: AnnouncmentsViewlistComponent },
      { path: 'announcement/:id', component: AnnouncmentComponent },
      { path: 'announcements/create', component: AnnouncmentFormComponent },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
