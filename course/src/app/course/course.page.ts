import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
private coursee: Course[];
  constructor(private courseService: CourseService) { }
  ngOnInit() {
   this.coursee = this.courseService.getAllCourses();
  }

}
