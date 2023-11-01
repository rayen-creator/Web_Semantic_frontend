import { BlogService } from 'src/app/core/services/blog.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {
  title:any
  post:any
  stringWithUnderscores:string ="";
  comments:any
  constructor(
    private blogService:BlogService,
    private activatedRoute:ActivatedRoute

    ){}

  ngOnInit(): void {
    this.title=this.activatedRoute.snapshot.params['title'];
    console.log("title",this.title)
    if(this.title){
      this.blogService.getpostdetails(this.title).subscribe((data:any) =>{
        this.post = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("post",this.post)
        
      });
      this.stringWithUnderscores = this.title.replace(/ /g, "_");
      console.log("title",this.title)
      this.blogService.getCommentsnypost(this.stringWithUnderscores).subscribe((data:any) =>{
        this.comments = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("comments",this.comments)

      })
    }
  }

}
