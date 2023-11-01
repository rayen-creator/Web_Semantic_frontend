import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent {
  posts: any[] = [];
  cat:any;
  stringWithUnderscores:string ="";
  constructor(private blogService: BlogService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cat=this.activatedRoute.snapshot.params['cat'];
    console.log("cat",this.cat)
    if (this.cat){
      this.stringWithUnderscores = this.cat.replace(/ /g, "_");
      console.log("cat2",this.stringWithUnderscores)
      this.blogService.getblogbycat(this.cat).subscribe((data: any) => {

        // Flatten the JSON objects and store them in an array
        this.posts = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("posts by cat:",this.posts)
      })

    }else{
      this.blogService.getposts().subscribe((data: any) => {

        // Flatten the JSON objects and store them in an array
        this.posts = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("posts:",this.posts)
      })

    }
    
  }
  
}
