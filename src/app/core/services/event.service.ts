import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8005/SpringMVC/controller';

  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<any> {
    const url = `${this.baseUrl}/getAllEvents`;
    return this.httpClient.get(url);
  }

  getEventByLabel(label: string): Observable<any> {
    const url = `${this.baseUrl}/getEventByLabel/${label}`;
    return this.httpClient.get(url);
  }

  getAttendees(eventLabel: string): Observable<any> {
    const url = `${this.baseUrl}/getAttendees/${eventLabel}`;
    return this.httpClient.get(url);
  }

  getReservationsByEventLabel(eventLabel: string): Observable<any> {
    const url = `${this.baseUrl}/getReservations/${eventLabel}`;
    return this.httpClient.get(url);
  }

  getAllReservations(): Observable<any> {
    const url = `${this.baseUrl}/getAllReservations`;
    return this.httpClient.get(url);
  }
}
