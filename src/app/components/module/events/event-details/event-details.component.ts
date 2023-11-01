import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  label: any;
  event: any;
  reservations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.label = this.route.snapshot.params['label'];

    if (this.label) {
      this.eventService.getEventByLabel(this.label).subscribe((data: any)  => {
        this.event = data;

        console.log("event:", data);
      });
      this.eventService.getReservationsByEventLabel(this.label).subscribe((data: any[]) => {
        this.reservations = data;
      });

    }
  }
}
