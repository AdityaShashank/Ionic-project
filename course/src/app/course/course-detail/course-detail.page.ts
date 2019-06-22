import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  private loadedcourse: Course[];
  constructor(private courseService: CourseService) { 
    
  }

  ngOnInit() {
    this.loadedcourse = this.courseService.getCourse(this.loadedcourse.id)

  }

}
