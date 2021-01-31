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

  ngOnInit() {
    const target2 = this.typewriterElement2.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;
    const target = this.typewriterElement.nativeElement

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'blue'
    })

    writer
      .type(`Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Maybe he has a little friend that lives right over here. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned.

Get away from those little Christmas tree things we used to make in school. You want your tree to have some character. Make it special. Just make little strokes like that. We'll put a happy little sky in here. See. We take the corner of the brush and let it play back-and-forth.

You have to make almighty decisions when you're the creator. Just go out and talk to a tree. Make friends with it. Let's have a little bit of fun today. Remember how free clouds are. They just lay around in the sky all day long. This is probably the greatest thing that's ever happened in my life.

Imagination is the key to painting. A beautiful little sunset. God gave you this gift of imagination. Use it. There are no limits in this world.

You can't have light without dark. You can't know happiness unless you've known sorrow. Maybe there's a happy little waterfall happening over here. As trees get older they lose their chlorophyll. Isn't that fantastic that you can make whole mountains in minutes? This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse.

Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things Maybe there's a happy little Evergreen that lives here. You got your heavy coat out yet? It's getting colder. Every time you practice, you learn more.

Don't forget to tell these special people in your life just how special they are to you. These trees are so much fun. I get started on them and I have a hard time stopping. If I paint something, I don't want to have to explain what it is.

`)
      .rest(500)
      .start()

    const writer2 = new Typewriter(target2, {
      typeColor: 'blue'
    })
    const writer3 = new Typewriter(target3, {
      typeColor: 'red'
    })

    writer2
      .type('Combo typewriters to')
      .removeCursor()
      .then(writer3.start.bind(writer3))
      .start()

    writer3
      .type("create complex effects")
      .rest(500)
      .clear()
      .changeTypeColor('red')
      .type("defy user expectations")
      .rest(500)
      .clear()
      .changeTypeColor('blue')
      .type("generate a custom loop")
      .rest(500)
      .clear()
      .changeTypeColor('black')
      .then(writer2.start.bind(writer2))
  }
}
