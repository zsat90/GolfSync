import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/courses.model';
import { CourseListService } from '../../service/course-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormValidationService } from '../../service/form-validation.service';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit {
  course!: Course
  

  constructor (private courseService: CourseListService, private router: Router, private route: ActivatedRoute, private formValidationService: FormValidationService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']

      if(id){
        this.courseService.getCourseById(id).subscribe(course => {
          this.course = course
        })

      }
    }) 
  }

  updateCourse(form: NgForm): void{
    if(form.invalid){
      this.formValidationService.markAllAsTouched(form);
      return;

    }
    if(this.course){
      this.courseService.updateCourse(this.course).subscribe(
        () => {
          this.router.navigate(['/courses'])
        }, 
        error => {
          console.error('Error updating course', error)
        }
      )
    }

  }

  deleteCourse(): void {
    if(this.course && this.course._id){
      this.courseService.deleteCourse(this.course._id).subscribe(
        () => {
          this.router.navigate(['/courses'])
        },
        error => {
          console.error('Error Deleting course:', error)
        }
      )
    }
  }

  cancelCourse(): void {
    this.router.navigate(['/courses'])
  }

}
