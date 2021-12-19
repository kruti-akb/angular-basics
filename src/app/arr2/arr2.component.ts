import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr2',
  templateUrl: './arr2.component.html',
  styleUrls: ['./arr2.component.css']
})
export class Arr2Component implements OnInit {

  myArr:string[]=["yellow","pink","blue"];
  constructor() { }

  ngOnInit(): void {
  }

}
