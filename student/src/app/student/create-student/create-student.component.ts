import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../models/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  StudentForm: FormGroup;
  model: Student;
  title: string;
  studentId: number;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Create Student";
    this.createForm();

    // edit Student
    this.studentId = +this.route.snapshot.paramMap.get('id');
    if(this.studentId) {
      this.getStudent();
    }
  }

  get f() { return this.StudentForm.controls; }

  goBack() {
    this.router.navigateByUrl('/create');
  }

  createForm() {
    this.StudentForm = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      mobile: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
      is_active: [1]
    })
  }

  onSubmit() {
    this.model = this.StudentForm.value;
    if (this.studentId) {
      this.updateStudent();
    } else {
      this.addStudent();
    }
  }

  addStudent() {
    this.model = this.StudentForm.value;
    this.studentService.addStudent(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/list');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateStudent() {
    this.model = this.StudentForm.value;
    this.model.id = this.studentId;
    this.studentService.updateStudent(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/list');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getStudent() {
    this.studentService.getStudent(this.studentId).subscribe(
      result => {
        console.log(result);
        this.StudentForm.patchValue(result.data)
      }
    )
  }

}
