import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
   {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'create',
    component: CreateStudentComponent
  },
  {
    path: 'edit/:id',
    component: CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
