import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  private uri = 'http://localhost:3000/api/courses'

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.uri)
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.uri}`, course);
  }

  // updateCourse(course: Course): Observable<Course> {
  //   return this.http.put<Course>(`${this.uri}/${course.id}`, course);
  // }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.uri}/${id}`);
  }
}