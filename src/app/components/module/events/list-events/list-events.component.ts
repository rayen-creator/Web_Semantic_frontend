import { Component } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import {Event} from 'src/app/core/models/event';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})

export class ListEventsComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data: any[]) => {
      this.events = data.map((item: any) => {
        const eventId = Object.keys(item)[0];
        const event = item[eventId];
        return { id: eventId, ...event };
      });
      console.log("events:", this.events);
    });
  }
}
