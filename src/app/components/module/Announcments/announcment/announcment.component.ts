import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AnnouncementService} from "../../../../core/services/Announcement.service";

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.css']
})
export class AnnouncmentComponent implements OnInit{
  id: any;
  announcement: any;
  constructor(private router: Router, private annService: AnnouncementService,  private currentRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.currentRoute.snapshot.params['id'];

    this.annService.getAnnouncementById(this.id).subscribe((data: any) => {
      // Assuming your service has a getAnnouncementById method
      this.announcement = { ...data, id: this.id };
      console.log("announcement", this.announcement);
    });
  }

}
