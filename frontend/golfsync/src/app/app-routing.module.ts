import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { RegisterComponent } from './login/register/register/register.component';
import { BookingComponent } from './bookings/booking/booking.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/new-course', component: NewCourseComponent},
  {path: 'courses/:id/edit', component: EditCourseComponent},
  {path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
