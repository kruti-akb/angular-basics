import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr1',
  templateUrl: './arr1.component.html',
  styleUrls: ['./arr1.component.css']
})
export class Arr1Component implements OnInit {

  myArr:number[]=[100,200,300,400,500]

  constructor() { }

  ngOnInit(): void {
  }

}
