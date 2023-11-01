import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListpostsComponent } from './listposts/listposts.component';
import { DetailPostComponent } from './detail-post/detail-post.component';


const routes: Routes = [{ path: '', component: BlogComponent },
{ path: 'listpost', component: ListpostsComponent },
{ path: 'listpost/:cat', component: ListpostsComponent },
{ path: 'details/:title', component: DetailPostComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
