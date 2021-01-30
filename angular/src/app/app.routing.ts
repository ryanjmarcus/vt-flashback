import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import {Routes, RouterModule, Router} from '@angular/router';


import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule
  ],
})
export class AppRoutingModule { }
