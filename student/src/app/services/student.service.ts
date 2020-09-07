import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';
import { environment } from '../../environments/environment';
import { Student } from '../student/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = `${environment.apiUrl}/student`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('StudentService')
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getStudents', []))
    )
  }

  getStudent(id: number) {
    return this.http.get<Student>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getStudent', null))
    )
  }

  addStudent(student: Student) {
    return this.http.post<Student>(`${this.apiUrl}/add`, student, this.httpOptions)
    .pipe(
      catchError(this.handleError('addStudent', null))
    )
  }

  updateStudent(student: Student) {
    return this.http.put<Student>(`${this.apiUrl}/update`, student, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateStudent', null))
    )
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deleteStudent', null))
    )
  }

}

