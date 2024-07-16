import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../../service/course-list.service';
import { Course } from '../../models/courses.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []
  newCourse: Course = {_id: '', name: '', description: '', location: '', image: ''}



  constructor(private courseService: CourseListService, private router: Router) {}

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
      this.newCourse = { _id: '', name: '', description: '', location: '', image: ''};
    });
  }

  editCourse(course: Course): void {
    this.router.navigate(['/courses', course._id, 'edit']);
  }

}
