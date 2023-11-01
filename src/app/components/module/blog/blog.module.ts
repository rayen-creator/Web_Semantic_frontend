import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListpostsComponent } from './listposts/listposts.component';
import { DetailPostComponent } from './detail-post/detail-post.component';


@NgModule({
  declarations: [
    BlogComponent,
    ListpostsComponent,
    DetailPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
    
  ]
})
export class BlogModule { }
