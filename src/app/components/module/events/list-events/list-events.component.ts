import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent {
  events: any[] = [];
  category: any;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['Category_event'];

    if (this.category) {
      this.eventService.getEventsByCategory(this.category).subscribe((data: any) => {
        // Flatten the JSON objects and store them in an array
        this.events = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("Events by category:", this.events);
      });
    } else {
      this.eventService.getAllEvents().subscribe((data: any) => {
        // Flatten the JSON objects and store them in an array
        this.events = data.map((item: any) => {
          const key = Object.keys(item)[0];
          return { ...item[key], id: key };
        });
        console.log("All events:", this.events);
      });
    }
  }
}
