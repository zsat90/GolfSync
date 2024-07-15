import { Component } from '@angular/core';
import { Course } from '../../models/courses.model';
import {Router} from '@angular/router'
import { CourseListService } from '../../service/course-list.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {
  newCourse: Course = { name: '', description: '', location: '' };

  constructor(private courseService: CourseListService, private router: Router){}

  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe(
      () => {
        this.router.navigate(['/courses'])
      },
      error => {
        console.error('Error adding course: ', error)
      }
    )

  }

}
