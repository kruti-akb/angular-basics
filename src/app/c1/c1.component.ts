import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  val1:number=100;
  str1:string="New string";
  date1:number=Date.now();


  constructor() { }

  ngOnInit(): void {
  }

}
