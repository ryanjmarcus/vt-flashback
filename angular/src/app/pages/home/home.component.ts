import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanvasService } from '../../services/canvas.service';
import Typewriter from 't-writer.js';
import { R3TargetBinder } from '@angular/compiler';

import {Course} from '../../models/course.model';
import {max} from 'rxjs/operators';
import {Person} from '../../models/person.model';
import {assertInterpolationSymbols} from '@angular/compiler/src/assertions';

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
  @ViewChild('tw6', { static: true})  typewriterElement65
  @ViewChild('tw6', { static: true }) typewriterElement6;
  @ViewChild('tw7', { static: true }) typewriterElement7;
  @ViewChild('tw8', { static: true }) typewriterElement8;
  @ViewChild('tw9', { static: true }) typewriterElement9;
  @ViewChild('tw10', { static: true }) typewriterElement10;
  writer: Typewriter
  writer2: Typewriter
  writer3: Typewriter
  writer4: Typewriter
  writer5: Typewriter
  writer65: Typewriter
  writer6: Typewriter
  writer7: Typewriter
  writer8: Typewriter
  writer9: Typewriter
  writer10: Typewriter
  showButton: boolean
  readyToGo: boolean
  target: ViewChild
  delayTime: number
  isScrolling: boolean
  courses: [Course];
  maxGpaCourse: Course;
  numberOfCourses: number;
  mostSubject: string;
  secondMostSubject: string;
  courseCredits: number;
  sortedCourses: [Course];
  person: Person;
  hardest1: Course;
  hardest2: Course;
  hardest3: Course;
  easy1: Course;
  easy2: Course;
  easy3: Course;

  people1: number;s
  people2: number;
  people3: number;
  people4: number;
  people5: number;
  peopleNames: string;

  assignmentTotal: number;
  enrollmentTotal: number;

  thisSemCourse: Course

  constructor(private canvasService: CanvasService) {
  }

  ngOnInit() {
    // this.getUser('4511~m4eCr4FEJJAZeorHcygUdHqiHOV0IixcCxqSLfJbtqZD1ui7n8gGtqNaoAVU0WJe');
    // this.getCourses('4511~m4eCr4FEJJAZeorHcygUdHqiHOV0IixcCxqSLfJbtqZD1ui7n8gGtqNaoAVU0WJe');
    this.person = new Person()
    this.person.avatar_url = 'https://trezured.com/packs/webp/default_profile~25d133b080794f3f793e6c0f0c1e007f.webp'
    this.person.name = "Oh, Yikes! Something went wrong."

    this.isScrolling = true;
    this.readyToGo = false;
    this.showButton = false;
    const textColor = 'black';
    this.delayTime = 6500;
    const speed = 35;
    const target2 = this.typewriterElement2.nativeElement;
    const target = this.typewriterElement.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;
    const target4 = this.typewriterElement4.nativeElement;
    const target5 = this.typewriterElement5.nativeElement;
    const target65 = this.typewriterElement65.nativeElement;
    const target6 = this.typewriterElement6.nativeElement;
    const target7 = this.typewriterElement7.nativeElement;
    const target8 = this.typewriterElement8.nativeElement;
    const target9 = this.typewriterElement9.nativeElement;
    const target10 = this.typewriterElement10.nativeElement;
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
    this.writer65 = new Typewriter(target65, {
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
    this.writer9 = new Typewriter(target9, {
      loop: false,
      typeColor: textColor,
      typeSpeed: speed

    })
    this.writer10 = new Typewriter(target10, {
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
    this.scrollToBottom();
    this.writer
      .type("Hi, I’m a bot trained to evaluate the courses you’ve taken at Virginia Tech. To get started, I’ll need to see your Canvas.")
      .removeCursor()
      .start()

  }

  startWriter2() {
    this.writer2
      .removeCursor().type('I’m just going to take a look at your courses and a little bit about yourself. I can’t post or change anything.<br>')
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
      .type('I need to gather some information. Please provide your Canvas API key. Now, if you are not a CS major, you may not know how to get that.<br><br>The API Key can be obtained by going to:<br>Canvas > Account > Settings > Approved Integrations > New Access Token<br>')
      .removeCursor().rest(500).type("<br>If you are still unsure, here's what the screen should look like:<br><br> <img src='../../../assets/accessToken.JPG' alt='Access Token Instructions' style='height: 45%; width: 80%;'><br>").rest(1000)
      .type("<br>The purpose field can be whatever you want! Next, select Generate Token. The screen should look like this:<br><br><img src='../../../assets/Token.JPG' alt='Access Token' style='height: 45%; width: 80%;'><br>").rest(1000).type("<br>You now have access to the API Token! Copy and paste it here, in the text input.<br><br>").
    start();


    this.delay(this.delayTime + 34000).then(any => {
      this.showButton = true;
      this.isScrolling = false;
      let element = document.createElement("input");
      document.getElementsByTagName('span')[0].append(element);
      let element2 = document.createElement("button");
      element2.innerText = "enter";
      document.getElementsByTagName('span')[0].append(element.appendChild(element2));
      element2.addEventListener("click", ()=>{
        this.apiKeyInput(document.getElementsByTagName("input")[0].value);
        document.getElementsByTagName("img")[0].remove();
        document.getElementsByTagName("img")[0].remove();
        element.remove();
        element2.remove();
        document.getElementsByTagName("span")[0].remove();
        console.log(document.getElementsByTagName("*").length);
        this.delay(2000).then(any => {
          this.startWriter5();
        });
        this.isScrolling = true;

      })


    });
  }

  apiKeyInput(key:string){
    this.getUser(key);
    console.log("User called");
    this.getCourses(key);

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
      .rest(2000).type("omg<br><br>").rest(1000).type("lol<br><br>").rest(1000).type("is this you?<br>").type('<br>').type('<img src =' + this.person.avatar_url + '></><br>').type(this.person.name).rest(3000).start();
    setTimeout(()=>{
      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "Maybe?";

      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
      document.getElementsByTagName("span")[0].appendChild(document.createElement("br"));
      document.getElementsByTagName("span")[0].appendChild(button1);
      document.getElementsByTagName("span")[0].appendChild(button2);


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
    }, 18000);
  }

  startWriter65(){
    this.writer65.removeCursor().type('Okay, there it is...seeing plenty of ' + this.secondMostSubject +
      " classes<br><br>").rest(1000).type("Finding a lot of " + this.mostSubject +
      " classes<br><br>").rest(1000).type("Like...").rest(1000).type(" a LOT<br><br>").rest(1000).
    type("Ready to take a lil look?<br><br>").start();
    let len = document.getElementsByClassName("span").length;
    let button1 = document.createElement("button");
    button1.innerText = "Yes!";
    let button2 = document.createElement("button");
    button2.innerText = "No...";
    setTimeout(()=>{
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


    });}, 18000);
  }
  startWriter6(){
    this.writer6.removeCursor().type("<br><br>Cute.<br><br>").rest(1000).type("Okay, here we go...<br><br>").rest(3000).type("Actually, I need a little bit more time...<br><br>").rest(3000).type("I didn't expect THIS MUCH...<br><br>").rest(8000).start();

      setTimeout(()=>{
        // document.getElementsByTagName("span")[2].append(button1);
        // document.getElementsByTagName("span")[2].append(button2);
        // button1.addEventListener("click", ()=>{
        //   this.startWriter7();
        //   button1.disabled = true;
        //   button2.disabled = true;
        // });
        // button2.addEventListener("click", ()=>{
        //   this.startWriter7();
        //   button1.disabled = true;
        //   button2.disabled = true;
        this.startWriter65();

      }, 25000);


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

    }, 8000);

  }

  reviewInput(num:any){
    this.scrollToBottom();
    try {
      if (isNaN(num)){
        throw 'exception';
      }
      let i = parseFloat(num);
      if (i < this.numberOfCourses){
        this.writer8.removeCursor().type("<br><br>That was a little low. I see " + this.courses.length + ".<br><br>");
      }
      else if (i === this.numberOfCourses){
        this.writer8.removeCursor().type("<br><br>Wow! That was it! " + this.courses.length + " is right!<br><br>");
      }
      else{
        this.writer8.removeCursor().type("<br><br>That was a little high. I only see " + this.courses.length + ".<br><br>");
      }
    } catch (error) {
      this.writer8.removeCursor().type("<br><br>thats not valid<br><br>");

    }
    this.writer8.rest(1000).type("That's around " + this.courseCredits + " credits that I can see.<br><br>").rest(1000).type("I'm sure you have more though. You seem like a whiz to me.<br><br>").
    rest(1000).type("Hold up, you're in " + this.thisSemCourse.subject + " " + this.thisSemCourse.course_number + " with " + this.thisSemCourse.teacher.split(",")[0] + " this semester?").rest(1000).type("...<br><br>").rest(500).type("You good?<br><br>").start();
    this.scrollToBottom();

    setTimeout(()=>{

      let button1 = document.createElement("button");
      button1.innerText = "Yes!";
      let button2 = document.createElement("button");
      button2.innerText = "No!";

      document.getElementsByTagName("span")[7].append(button1);
      document.getElementsByTagName("span")[7].append(button2);
      button1.addEventListener("click", ()=>{
        this.startWriter9();
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click", ()=>{
        this.startWriter9();
        button1.disabled = true;
        button2.disabled = true;
      })

    }, 24000);
  }

  startWriter9(){
    this.writer9.removeCursor().type("<br><br>Figured.<br>").rest(500).type("<br>Alright, I'm seeing some crazy numbers<br>").rest(1000).type("<br>Omg, you submitted over " + this.assignmentTotal + ' assignments<br>')
      .rest(1000).type("<br>You've taken classes with over " + this.enrollmentTotal +  " people<br>").rest(1000)
      .type("<br>The same:<br>").rest(500).type("<br>2 classes with " + this.people2 + " people<br>").rest(500).type("<br>3 classes with " + this.people3 + " people<br>").rest(500).type("<br> 4 classes with " +  this.people4 +  " people<br>").rest(500).type("<br>And...<br>").rest(500).type("<br> 5 with " + 4 + " people<br>")
      .rest(1000).type("<br>These names have to ring a bell:<br><br>" + this.peopleNames + "<br><br>").start();
    setTimeout(()=>{
      let button1 = document.createElement("button");
      button1.innerText = "Yes! They do!";
      let button2 = document.createElement("button");
      button2.innerText = "Who???";

      document.getElementsByTagName("span")[9].appendChild(button1);
      document.getElementsByTagName("span")[9].appendChild(button2);
      button1.addEventListener("click", ()=>{
        this.writer10.removeCursor().type("<br><br>Attentive, Nice<br>");
        this.startWriter10();
        button1.disabled = true;
        button2.disabled = true;
      });
      button2.addEventListener("click", ()=>{
        this.writer10.removeCursor().type("<br><br>You should try Instagram<br>");
        this.startWriter10();
        button1.disabled = true;
        button2.disabled = true;
      })
    }, 35000);
  }

  startWriter10(){
    this.writer10.rest(1000).type("<br>Let's take a look at the different difficulty levels...<br>").
    rest(1000).type("<br>Your easiest class seems to be " + this.easy1.subject + " " + this.easy1.course_number + "<br>").rest(500).type("<br>and the hardest... " + this.hardest1.subject + " " + this.hardest2.course_number + "<br>").
    rest(1000).type("<br>I remember taking that... jk<br>").rest(1000).type("<br>To be honest, you took quite a couple hard classes:<br>").
    rest(500).type("<br>" + this.easy2.subject + " " + this.easy2.course_number+ "<br>").rest(500).type("<br>CS 2506<br>").rest(500).type("<br>CS 3214<br>").rest(1000).
    type("<br>And some easy ones:<br>").rest(500).type("<br>MUS 1104<br>").rest(500).type("<br>GEOG 1014<br>").rest(1000).type("<br>Well, from looking at your data, I must say I am impressed with what you have accomplished thus far.<br>").
    rest(1000).type("<br>It looks like you are trying your hardest and that's all that matters.<br>").rest(1000).
    type("<br>Take it easy and stay safe!").start();
    setTimeout(()=>{
      this.isScrolling = false;
    }, 35000);
  }
  scrollToBottom(){
    if(this.isScrolling){
      window.scrollBy(0, 1);
      setTimeout(()=>this.scrollToBottom(), 10);
    }
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

  //we didnt get here
  setPeople() {

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


      this.courseCredits = Math.round(this.numberOfCourses * 2.5);

      this.setHighestSubject();
      this.sortCoursesByGPA();

      this.hardest1 = this.sortedCourses[0];
      this.hardest2 = this.sortedCourses[1];
      this.hardest3 = this.sortedCourses[2];

      this.easy1 = this.sortedCourses[this.sortedCourses.length - 1];
      this.easy2 = this.sortedCourses[this.sortedCourses.length - 2];
      this.easy3 = this.sortedCourses[this.sortedCourses.length - 3];

      this.setAssignmentAndEnrollmentTotal();

      this.courseThisSemester();

      //didn't get here, but we have the data :(
      this.people1 = 1842;
      this.people2 = 689;
      this.people3 = 215;
      this.people4 = 31;
      this.people5 = 4;
      this.peopleNames = "Elizabeth Holmes, Matthew Douglas, Xin Huang, Matthew Betsill"

    });
  }
  getUser(token: string) {
    this.canvasService.getUser(token).subscribe( data => {
      this.person = data;
      console.log(this.person);
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

  //almost got here
  courseThisSemester() {
    const thisSemCourse = this.courses[4];
    this.thisSemCourse = thisSemCourse;
  }

  setAssignmentAndEnrollmentTotal() {
    let assignmentTotal = 0;
    let enrollmentTotal = 0;
    this.courses.forEach(course =>  {
      assignmentTotal += course.assignment_total;
      enrollmentTotal += course.user_total;
    });

    this.assignmentTotal = assignmentTotal;
    this.enrollmentTotal = enrollmentTotal;


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

  sortCoursesByGPA() {

    const potentialCourses = [];

    this.courses.forEach( course => {
      if (course.GPA !== null && course.GPA !== 4) {
        potentialCourses.push(course);
      }

    });

    this.sortedCourses = potentialCourses.sort((a: Course, b: Course) => (a.GPA > b.GPA) ? 1 : -1);

  }
}




