import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListpostsComponent } from './listposts/listposts.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [{ path: '', component: BlogComponent },
{ path: 'listpost', component: ListpostsComponent },
{ path: 'comment/:id', component: AddcommentComponent },
{ path: 'addpost/:id', component: AddpostComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
