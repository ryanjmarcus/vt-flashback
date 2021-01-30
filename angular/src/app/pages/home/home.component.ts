import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CanvasService } from '../../services/canvas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private canvasService: CanvasService ) { }

  ngOnInit() {
    this.canvasService.getCourses().subscribe(data => {
      console.log(data);
      console.log("Hello");
    });
    console.log('Hello');
  }

}

