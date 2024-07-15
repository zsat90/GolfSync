import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../../service/course-list.service';
import { Course } from '../../models/courses.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []
  newCourse: Course = { name: '', description: '', location: ''}


  constructor(private courseService: CourseListService) {}

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(): void {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.courses = data
    })
  }

  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe((course: Course) => {
      this.courses.push(course);
      this.newCourse = { name: '', description: '', location: '' };
    });
  }

  // editCourse(course: Course): void {
  //   this.courseService.updateCourse(course).subscribe((updatedCourse: Course) => {
  //     const index = this.courses.findIndex(c => c.id === updatedCourse.id);
  //     if (index !== -1) {
  //       this.courses[index] = updatedCourse;
  //     }
  //   });
  // }

  // deleteCourse(course: Course): void {
  //   this.courseService.deleteCourse(course.id).subscribe(() => {
  //     this.courses = this.courses.filter(c => c.id !== course.id);
  //   });
  // }
}
