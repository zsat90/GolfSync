import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { NewCourseComponent } from './courses/new-course/new-course.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/new-course', component: NewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }