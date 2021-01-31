import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CanvasService } from '../../services/canvas.service';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tw', {static: true}) typewriterElement;
  @ViewChild('tw2', {static: true}) typewriterElement2;
  @ViewChild('tw3', {static: true}) typewriterElement3;

  writer: Typewriter
  writer2: Typewriter
  showButton: boolean

  ngOnInit() {
    const target2 = this.typewriterElement2.nativeElement;
    const target = this.typewriterElement.nativeElement

    this.writer = new Typewriter(target, {
      loop: false,
      typeColor: 'blue'
    })

    this.writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: 'blue'

    })

    this.startWriter();
    this.delay(2000).then(any=>{
      this.startWriter2();
    });

  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }


  startWriter() {
    this.writer
      .type('Hello')
      .removeCursor()
      .start()

  }

  startWriter2() {
    this.writer2
      .type('Y0ooooo')
      .rest(500)
      .start()

    this.delay(2000).then(any=>{
      this.showButton = true;
    });
  }

  switchButton() {
    this.showButton = !this.showButton;
  }
}
