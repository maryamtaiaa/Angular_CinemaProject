import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {CinemaComponent} from './cinema/cinema.component';

const routes:Routes=[
  {
    path: 'cinema',
    component: CinemaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
