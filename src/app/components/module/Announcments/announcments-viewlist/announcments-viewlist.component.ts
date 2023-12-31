import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from "../../../../core/services/Announcement.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-announcments-viewlist',
  templateUrl: './announcments-viewlist.component.html',
  styleUrls: ['./announcments-viewlist.component.css']
})
export class AnnouncmentsViewlistComponent implements OnInit {
  announcements: any[] = [];
  uniqueTags: string[] = [];
  selectedTag: string = '';

  constructor(private AnnouncService: AnnouncementService, private router: Router) { }

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

      // Extract unique tags
      this.uniqueTags = [...new Set(this.announcements.flatMap(announcement => announcement.Announcement_has_tags))];
    });
  }

  getAnnouncementId(fullId: string): string {
    const parts = fullId.split('#');
    return parts[1]; // Assuming the ID is always in the second part
  }

  // Function to apply tag filtering
  applyTagFilter() {
    if (this.selectedTag) {
      this.getAnnouncementsByTag(this.selectedTag);
    } else {
      this.getAllAnnouncements(); // Reset to all announcements if no tag selected
    }
  }

  private getAnnouncementsByTag(tag: string) {
    this.AnnouncService.getAnnouncementsByTag(tag).subscribe((data: any) => {
      this.announcements = data.map((item: any) => {
        const key = Object.keys(item)[0];
        return { ...item[key], id: key };
      });
      console.log("announcements", this.announcements);
    });
  }
}
