import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventsComponent,
    EventDetailsComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
