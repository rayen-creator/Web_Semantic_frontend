import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import {AnnouncmentsListComponent} from "./Announcments/announcments-list/announcments-list.component";

const routes: Routes = [

  { path: '',
      component: ModuleComponent,
      children: [
          { path: '', component: AnnouncmentsListComponent },
          { path: 'Events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }

      ],
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
