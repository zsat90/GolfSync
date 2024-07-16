import { Component } from '@angular/core';
import { Course } from '../../models/courses.model';
import {Router} from '@angular/router'
import { CourseListService } from '../../service/course-list.service';
import { NgForm } from '@angular/forms';
import { FormValidationService } from '../../service/form-validation.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {
  newCourse: Course = { _id: '', name: '', description: '', location: '', image: '' };

  constructor(private courseService: CourseListService, private router: Router, private formValidationService: FormValidationService){}

  addCourse(form: NgForm): void {
    if (form.invalid) {
      this.formValidationService.markAllAsTouched(form);
      return;
    }

    this.courseService.addCourse(this.newCourse).subscribe(
      () => {
        this.router.navigate(['/courses'])
      },
      error => {
        console.error('Error adding course: ', error)
      }
    )

  }

  cancelCourse(): void {
    this.router.navigate(['/courses'])
  }


}
