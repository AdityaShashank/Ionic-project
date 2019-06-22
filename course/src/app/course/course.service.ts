import { Injectable } from '@angular/core';
import { Course } from './course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 'r1',
      title: 'ComputerNetworks',
      imageUrl: '',
      contents:  ['Network layer', 'Presentation Layer', 'Physical Layer', 'DataLinkLayer', 'TranportLayer'],
    },
    {
      id: 'r2',
      title: 'OperatingSystems',
      imageUrl: '',
      contents:  ['Network layer', 'Presentation Layer', 'Physical Layer', 'DataLinkLayer', 'TranportLayer'],
    },
    {
      id: 'r3',
      title: 'DataStructures',
      imageUrl: '',
      contents:  ['Network layer', 'Presentation Layer', 'Physical Layer', 'DataLinkLayer', 'TranportLayer'],
    }]

  constructor() { }
  getAllCourses() {
     return [...this.courses];
  }
  getCourse(courseId: string) {
 return{...this.coursee.find(courses => {
      return courses.id === courseId;
      }
      )
    };
  }
}
