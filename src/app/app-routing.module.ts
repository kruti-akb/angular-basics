import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { C1Component } from './c1/c1.component';
import { Arr1Component } from './arr1/arr1.component';
import { Arr2Component } from './arr2/arr2.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { UserFormComponent } from './user-form/user-form.component';
//const routes: Routes = [];

const routes:Routes=[
  {
    path:"simple-data",component:C1Component
  },
  {
    path:"array-data",component:Arr1Component
  },
  {
    path:"array-combo",component:Arr2Component
  },
  {
    path:"dynamic-form",component:DynamicFormComponent
  },
  {
    path:"user-form",component:UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
