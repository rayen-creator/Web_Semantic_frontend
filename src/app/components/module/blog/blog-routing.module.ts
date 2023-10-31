import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListpostsComponent } from './listposts/listposts.component';


const routes: Routes = [{ path: '', component: BlogComponent },
{ path: 'listpost', component: ListpostsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
