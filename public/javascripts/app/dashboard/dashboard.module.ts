import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDirective } from "../shared/confirm"
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule }   from '../shared/shared.module';
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, SharedModule ],
  declarations: [  
                  DashboardComponent
                ],
  exports:      [  
                  DashboardComponent
                ],
 providers: []                  
})
export class DashboardModule { }