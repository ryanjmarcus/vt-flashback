import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanvasService } from '../../services/canvas.service';
import Typewriter from 't-writer.js';
import { R3TargetBinder } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tw', { static: true }) typewriterElement;
  @ViewChild('tw2', { static: true }) typewriterElement2;
  @ViewChild('tw3', { static: true }) typewriterElement3;
  @ViewChild('tw3', { static: true }) typewriterElement4;
  @ViewChild('tw5', { static: true }) typewriterElement5;
  writer: Typewriter
  writer2: Typewriter
  writer3: Typewriter
  writer4: Typewriter
  writer5: Typewriter
  showButton: boolean
  readyToGo: boolean
  target: ViewChild
  delayTime: number
  ngOnInit() {
    this.readyToGo = false;
    this.showButton = false;
    const textColor = 'black';
    this.delayTime = 2000;
    const speed = 10;
    const target2 = this.typewriterElement2.nativeElement;
    const target = this.typewriterElement.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;
    const target4 = this.typewriterElement4.nativeElement;
    const target5 = this.typewriterElement5.nativeElement;
    this.writer = new Typewriter(target, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed
    })

    this.writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })

    this.writer3 = new Typewriter(target3, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })
    this.writer4 = new Typewriter(target3, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })
    this.writer5 = new Typewriter(target5, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })


    this.startWriter();
    this.delay(this.delayTime).then(any => {
      this.startWriter2();
    });

  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }


  startWriter() {
    this.writer
      .type("Hi, I’m a bot trained to evaluate the courses you’ve taken at Virginia Tech. To get started, I’ll need to see your Canvas.")
      .removeCursor()
      .start()

  }

  startWriter2() {
    this.writer2
      .type('I’m just going to take a look at your courses and a little bit about yourself. I can’t post or change anything.')
      .rest(500)
      .start()

    this.delay(this.delayTime).then(any => {
      this.showButton = true;

    });
  }
  clearElements(list:Element[]){
    Array.from(list).forEach(element => {
      element.remove();
    });
  }
  startWriter3() {
    this.writer3
      .type('I need to gather some information. Please provide your canvas API key. This can be obtained by going to Canvas>account>settings<br>')
      .removeCursor().rest(500)
      .start();
      

    this.delay(this.delayTime).then(any => {
      this.showButton = true;
      
      let element = document.createElement("input");
      document.getElementsByTagName('span')[0].append(element);
      let element2 = document.createElement("button");
      element2.innerText = "enter";
      document.getElementsByTagName('span')[0].append(element.appendChild(element2));
      element2.addEventListener("click", ()=>{
        this.apiKeyInput(document.getElementsByTagName("input")[0].value);
        element.remove();
        element2.remove();
        document.getElementsByTagName("span")[0].remove();
        console.log(document.getElementsByTagName("*").length);
        this.startWriter5();
      })
      

    });
  }

  apiKeyInput(key:string){
    console.log(key);
  }
  startWriter4() {
    this.writer3
      .type("Well, that's lame")
      .rest(500)
      .start();

  }

  startWriter5() {
    console.log("writer starting");
    this.writer5
      .type("Great! Let me look over things for a little...")
      .rest(500)
      .start();
    setTimeout(()=>{
      document.getElementsByTagName("span")[0].remove();
    }, 3000
    );
  }

  switchReady() {
    this.showButton = !this.showButton;
    this.readyToGo = true;
    document.getElementsByTagName("span")[0].remove();
    document.getElementsByTagName("span")[0].remove();
    this.clearElements(Array.from(document.getElementsByTagName("br")));
    this.startWriter3();
  }

  switchNo() {
    this.showButton = !this.showButton;
    this.readyToGo = true;
    document.getElementsByTagName("span")[0].remove();
    document.getElementsByTagName("span")[0].remove();
    Array.from(document.getElementsByTagName("br")).forEach(element => {
      element.remove();
    });

    this.startWriter4();
  }
}
