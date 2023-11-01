import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'list', component: ListEventsComponent },
  { path: 'details/:label', component: EventDetailsComponent },
  { path: 'list/:Category_event', component: ListEventsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
