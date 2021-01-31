import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private canvasUrl: string;

  constructor(private http: HttpClient) {
    this.canvasUrl = 'http://127.0.0.1:5000/api/v1/canvas/courses?token=';
  }

  public getCourses(token: string): Observable<Course[]> {
    return this.http.get(this.canvasUrl + token);
  }
}
