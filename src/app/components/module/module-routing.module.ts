import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
//import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: ModuleComponent },
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  //  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule {}
