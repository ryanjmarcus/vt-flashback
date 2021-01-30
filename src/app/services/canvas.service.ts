import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private canvasUrl: string;

  constructor(private http: HttpClient) {
    this.canvasUrl = 'https://canvas.vt.edu/api/v1/courses?per_page=100&access_token=4511~SsI750mQ6uLCXvAYdil WU7Xz9CO2h4BLFA5y2y9xMNztFbGePiUHQcLULGaMC6sC';
  }

  public getCourses(course: string, instructorLastName: string) {
    return this.http.get(this.canvasUrl);
  }
}
