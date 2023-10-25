import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import {AnnouncmentsListComponent} from "./Announcments/announcments-list/announcments-list.component";

const routes: Routes = [
  { path: '',
    component: ModuleComponent,
    children: [
        { path: '', component: AnnouncmentsListComponent },
        { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
