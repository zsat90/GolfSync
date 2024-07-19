import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookingService } from '../../service/booking.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  booking = {
    course: '',
    date: '',
    time: '',
  };
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn;

    if (this.isLoggedIn) {
      this.route.queryParams.subscribe((params) => {
        if (params['course']) {
          this.booking.course = params['course'];
        }
      });
    }
  }

  bookCourse(form: NgForm) {
    if (form.valid) {
      this.bookingService.createBooking(this.booking).subscribe(
        (response) => {
          alert('Course Booked. Thank you for booking!');
          this.router.navigate(['/']);
        },
        (error) => {
          this.errorMessage = 'Failed to book the course. Please try again.';
          console.error('Booking error', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
