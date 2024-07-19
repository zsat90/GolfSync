import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/bookings';

  constructor(private http: HttpClient) {}

  createBooking(booking: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, booking);
  }
}
