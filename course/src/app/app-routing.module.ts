import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'course', loadChildren: './course/course.module#CoursePageModule' },
  { path: 'course-detail', loadChildren: './course/course-detail/course-detail.module#CourseDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
