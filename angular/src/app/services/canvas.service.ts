import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Course} from '../models/course.model';
import {Person} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private courseUrl: string;
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.courseUrl = 'http://127.0.0.1:5000/api/v1/canvas/courses?token=';
    this.userUrl = 'http://127.0.0.1:5000/api/v1/canvas/user?token=';

  }

  public getCourses(token: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl + token);
  }

  public getUser(token: string): Observable<Person> {
    return this.http.get<Person>(this.userUrl + token);
  }
}
