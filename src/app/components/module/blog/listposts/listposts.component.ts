import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent {
  posts: any[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getposts().subscribe((data: any) => {

      // Flatten the JSON objects and store them in an array
      this.posts = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("posts:",this.posts)
    })
  }
  encodeTitle(title: string) {
    // Replace spaces with underscores
    return title.replace(/ /g, '%20');
  }
}
