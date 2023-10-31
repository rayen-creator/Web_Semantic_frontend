import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../../../../core/services/Announcement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-announcments-list',
  templateUrl: './announcments-list.component.html',
  styleUrls: ['./announcments-list.component.css']
})
export class AnnouncmentsListComponent implements OnInit {

  announcements: any[] = [];
  constructor(private AnnouncService: AnnouncementService, private router : Router) { }


  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  private getAllAnnouncements() {
    this.AnnouncService.getAnnouncements().subscribe((data: any) => {

      // Flatten the JSON objects and store them in an array
      this.announcements = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("announcements",this.announcements)
    })

  }

  getAnnouncementId(fullId: string): string {
    const parts = fullId.split('#');
    return parts[1]; // Assuming the ID is always in the second part
  }

}
