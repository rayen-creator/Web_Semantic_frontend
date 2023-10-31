import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  url = 'http://localhost:8005/SpringMVC/Announcement';

  constructor(private httpclient: HttpClient) { }

  getAnnouncements() {
    return this.httpclient.get(this.url + '/getAnnouncements');
  }

  getAnnouncementById(id: string) {
    return this.httpclient.get(`${this.url}/getAnnouncementById/${id}`);
  }
}
