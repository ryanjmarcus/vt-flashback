import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanvasService } from '../../services/canvas.service';
import Typewriter from 't-writer.js';
import { R3TargetBinder } from '@angular/compiler';
<<<<<<< HEAD
import { stringify } from '@angular/compiler/src/util';
=======

import {Course} from '../../models/course.model';
import {max} from 'rxjs/operators';

>>>>>>> 33370376c6305b4af09d9831eadfa63795731b79
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
  @ViewChild('tw6', { static: true }) typewriterElement6;
  @ViewChild('tw7', { static: true }) typewriterElement7;
  @ViewChild('tw8', { static: true }) typewriterElement8;
  writer: Typewriter
  writer2: Typewriter
  writer3: Typewriter
  writer4: Typewriter
  writer5: Typewriter
  writer6: Typewriter
  writer7: Typewriter
  writer8: Typewriter
  showButton: boolean
  readyToGo: boolean
  target: ViewChild
  delayTime: number

  courses: [Course];
  maxGpaCourse: Course;
  numberOfCourses: number;
  mostSubject: string;
  secondMostSubject: string;
  courseCredits: number;

  constructor(private canvasService: CanvasService) {
  }

  ngOnInit() {

    this.getCourses('4511~m4eCr4FEJJAZeorHcygUdHqiHOV0IixcCxqSLfJbtqZD1ui7n8gGtqNaoAVU0WJe');

    this.readyToGo = false;
    this.showButton = false;
    const textColor = 'black';
    this.delayTime = 1000;
    const speed = 5;
    const target2 = this.typewriterElement2.nativeElement;
    const target = this.typewriterElement.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;
    const target4 = this.typewriterElement4.nativeElement;
    const target5 = this.typewriterElement5.nativeElement;
    const target6 = this.typewriterElement6.nativeElement;
    const target7 = this.typewriterElement7.nativeElement;
    const target8 = this.typewriterElement8.nativeElement;
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
    this.writer6 = new Typewriter(target6, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })
    this.writer7 = new Typewriter(target7, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })
    this.writer8 = new Typewriter(target8, {
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
    this.scrollToBottom();

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
    this.writer5.removeCursor()
      .type("Great! Let me look over things for a little...<br><br>")
      .rest(2000).type("omg<br><br>").rest(1000).type("lol<br><br>").rest(1000).type("is this you?<br><br>").start();
<<<<<<< HEAD
      setTimeout(()=>{
        let button1 = document.createElement("button");
        button1.innerText = "Yes!";
        let button2 = document.createElement("button");
        button2.innerText = "Maybe?";
        document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
        document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
        document.getElementsByTagName("span")[0].appendChild(button1);
        document.getElementsByTagName("span")[0].appendChild(button2);
        document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
        document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));

        button1.addEventListener("click",()=>{
          this.startWriter6();
          button1.disabled = true;
          button2.disabled = true;
        });
        button2.addEventListener("click",()=>{
          this.startWriter6();
          button2.disabled = true;
          button1.disabled = true;
        });
      }, 8000);
  }

  startWriter6(){
    this.writer6.removeCursor().type("Cute<br><br>").rest(1000).type("Okay, here we go...<br><br>").rest(3000).type("Seeing plenty of <variable> classes<br><br>").rest(1000).type("Finding a lot of <variable> classes<br><br>").rest(1000).type("Like...").rest(1000).type(" a LOT<br><br>").rest(1000).type("Ready to take a lil look?<br><br>").start();
    setTimeout(()=>{
      let len = document.getElementsByClassName("span").length;
      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "No! I find this bot to be condescending!";
      
      document.getElementsByTagName("span")[2].append(button1);
      document.getElementsByTagName("span")[2].append(button2);
      button1.addEventListener("click", ()=>{
        this.startWriter7();
=======
    setTimeout(()=>{
      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "Maybe?";
      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
      document.getElementsByTagName("span")[0].appendChild(button1);
      document.getElementsByTagName("span")[0].appendChild(button2);
      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));

      button1.addEventListener("click",()=>{
        this.startWriter6();
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click",()=>{
        this.startWriter6();
        button2.disabled = true;
        button1.disabled = true;
      });
    }, 8000);
  }

  startWriter6(){
    this.writer6.removeCursor().type("Cute<br><br>").rest(1000).type("Okay, here we go...<br><br>").rest(3000).type('Seeing plenty of ' + this.secondMostSubject +  " classes<br><br>").rest(1000).type("Finding a lot of " + this.mostSubject +  " classes<br><br>").rest(1000).type("Like...").rest(1000).type(" a LOT<br><br>").rest(1000).type("Ready to take a lil look?<br><br>").start();
    setTimeout(()=>{
      let len = document.getElementsByClassName("span").length;
      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "No...";

      document.getElementsByTagName("span")[2].append(button1);
      document.getElementsByTagName("span")[2].append(button2);
      button1.addEventListener("click", ()=>{
        this.startWriter7();
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click", ()=>{
        this.startWriter7();
        button1.disabled = true;
        button2.disabled = true;
      })

    }, 11000);
  }

  startWriter7(){
    this.writer7.removeCursor().type("<br><br>Excellent <br><br>").rest(1000).type("Wait, quick. Take a guess... ").rest(1000).type("How many courses have you taken so far?<br><br>").rest(1000).start();
    setTimeout(()=>{
      let element = document.createElement("input");
      document.getElementsByTagName('span')[5].append(element);
      let element2 = document.createElement("button");
      element2.innerText = "enter";
      document.getElementsByTagName('span')[5].append(element.appendChild(element2));

      element2.addEventListener("click", ()=>{
        element2.disabled = true;
        this.reviewInput(element.value);

      });

    }, 5000);

  }

  reviewInput(num:string){
    this.scrollToBottom();
    try {
      let i = parseInt(num);
      if (i < 20){
        this.writer8.removeCursor().type("<br><br>That was a little low<br><br>");
      }
      else if (i == 20){
        this.writer8.removeCursor().type("<br><br>Wow! That was it!<br><br>");
      }
      else{
        this.writer8.removeCursor().type("<br><br>That was a little high<br><br>");
      }
    } catch (error) {
      this.writer8.removeCursor().type("<br><br>thats not valid<br><br>");

    }
    this.writer8.rest(1000).type("Thats around " + this.courseCredits + " credits that I can see.<br><br>").rest(1000).type("I'm sure you have more though. You seem like a whiz to me.<br><br>").
    rest(1000).type("Your average start time for a course was: startTime<br><br>").rest(1000).type("Hold up, you're in class, with professor this semester?").rest(1000).type("...<br><br>").rest(500).type("You good?<br><br>").start();
    this.scrollToBottom();
    setTimeout(()=>{

      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "No!";

      document.getElementsByTagName("span")[6].append(button1);
      document.getElementsByTagName("span")[6].append(button2);
      button1.addEventListener("click", ()=>{
        //this.startWriter7();
>>>>>>> 33370376c6305b4af09d9831eadfa63795731b79
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click", ()=>{
<<<<<<< HEAD
        this.startWriter7();
=======
        //this.startWriter7();
>>>>>>> 33370376c6305b4af09d9831eadfa63795731b79
        button1.disabled = true;
        button2.disabled = true;
      })

<<<<<<< HEAD
    }, 11000);
=======
    }, 10000);
  }
  scrollToBottom(){
    window.scrollBy(0, 1);
    setTimeout(()=>this.scrollToBottom(), 10);
>>>>>>> 33370376c6305b4af09d9831eadfa63795731b79
  }

  startWriter7(){
     this.writer7.removeCursor().type("<br><br>Excellent <br><br>").rest(1000).type("Wait, quick. Take a guess... ").rest(1000).type("How many courses have you taken so far?<br><br>").rest(1000).start();
     setTimeout(()=>{
      let element = document.createElement("input");
      document.getElementsByTagName('span')[5].append(element);
      let element2 = document.createElement("button");
      element2.innerText = "enter";
      document.getElementsByTagName('span')[5].append(element.appendChild(element2));
      
      element2.addEventListener("click", ()=>{
        element2.disabled = true;
        this.reviewInput(element.value);
        
      });
  
     }, 5000);

  }

  reviewInput(num:string){
    this.scrollToBottom();
    try {
      let i = parseInt(num);
      if (i < 20){
        this.writer8.removeCursor().type("<br><br>That was a little low<br><br>");
      }
      else if (i == 20){
        this.writer8.removeCursor().type("<br><br>Wow! That was it!<br><br>");
      }
      else{
        this.writer8.removeCursor().type("<br><br>That was a little high<br><br>");
      }
    } catch (error) {
      this.writer8.removeCursor().type("<br><br>thats not valid<br><br>");
      
    }
    this.writer8.rest(1000).type("Thats over 105 credits that I can see.<br><br>").rest(1000).type("I'm sure you have more though. You seem like a whiz to me.<br><br>").
    rest(1000).type("Your average start time for a course was: startTime<br><br>").rest(1000).type("Hold up, you're in class, with professor this semester?").rest(1000).type("...<br><br>").rest(500).type("You good?<br><br>").start();
    this.scrollToBottom();
    setTimeout(()=>{
      
      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "No!";
      
      document.getElementsByTagName("span")[6].append(button1);
      document.getElementsByTagName("span")[6].append(button2);
      button1.addEventListener("click", ()=>{
        //this.startWriter7();
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click", ()=>{
        //this.startWriter7();
        button1.disabled = true;
        button2.disabled = true;
      })
      
    }, 10000);
  }
  scrollToBottom(){
    window.scrollBy(0, 1);
    setTimeout(()=>this.scrollToBottom(), 10);
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


  getCourses(token: string) {
    this.canvasService.getCourses(token).subscribe(data => {
      this.courses = data;
      console.log(this.courses);

      this.setHighestGPA();
      console.log(this.maxGpaCourse);

      this.setCreditHours()
      console.log(this.courseCredits);


      this.setNumberOfCourses();
      console.log(this.numberOfCourses);

      this.setHighestSubject();
      console.log(this.mostSubject);
      console.log(this.secondMostSubject);

    });
  }

  setNumberOfCourses() {
    this.numberOfCourses = this.courses.length;
  }

  setHighestGPA() {
    this.maxGpaCourse = this.courses[0];
    this.courses.forEach(course => {

      if (course.GPA > this.maxGpaCourse.GPA) {
        this.maxGpaCourse = course;
      }
    });

  }

  setCreditHours() {
    let credits = 0
    this.courses.forEach(course =>  {
     credits += course.credit_hours;
    });
    this.courseCredits = credits;
  }

  setHighestSubject() {

    let subjects = [];
    this.courses.forEach(course =>  {
      subjects.push(course.subject);
    });

    let max = subjects[0];
    let secondMax = subjects[0];
    let counter = {};
    let i = subjects.length;
      var element;

    while (i--) {
      element = subjects[i];
      if (!counter[element]) { counter[element] = 0; }
      counter[element]++;
      if (counter[max] < counter[element]) {
        max = element;
      }
    }
    this.mostSubject = max;
    this.setSecondHighestSubject();

  }

  setSecondHighestSubject() {
    let subjects = [];
    this.courses.forEach(course =>  {
      if (course.subject !== this.mostSubject) {
        subjects.push(course.subject);
      }
    });

    let max = subjects[0];
    let counter = {};
    let i = subjects.length;
    var element;

    while (i--) {
      element = subjects[i];
      if (!counter[element]) { counter[element] = 0; }
      counter[element]++;
      if (counter[max] < counter[element]) {
        max = element;
      }
    }
    this.secondMostSubject = max;
  }
}




