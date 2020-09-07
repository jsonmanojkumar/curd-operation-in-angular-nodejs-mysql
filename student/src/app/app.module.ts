import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentModule} from './student/student.module'
import {HttpErrorHandler} from './services/http-error-handler.service';
import {MessageService} from './services/message.service';
import {StudentService} from './services/student.service'; 
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    StudentService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
