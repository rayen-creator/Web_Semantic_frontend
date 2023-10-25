import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListpostsComponent } from './listposts/listposts.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { AddpostComponent } from './addpost/addpost.component';


@NgModule({
  declarations: [
    BlogComponent,
    ListpostsComponent,
    AddcommentComponent,
    AddpostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
