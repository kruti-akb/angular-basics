import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  d1:string[]=["textbox","textarea"];
  selectVal:string="select";

  constructor() { }

  ngOnInit(): void {
  }

  

}
