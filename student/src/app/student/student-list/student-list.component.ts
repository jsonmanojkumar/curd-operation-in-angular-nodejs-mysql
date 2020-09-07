import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  title: string;
  rows: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Student';
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deleteStudent(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.studentService.deleteStudent(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
