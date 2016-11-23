import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./users/users.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UsersComponent } from "./users/users.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  UsersModule,
                  DashboardModule
                  // RouterModule.forRoot(
                  //   [
                  //      { path: "/dashboard", component: DashboardComponent },
                  //      { path: "/users", component: UsersComponent },
                  //      { path: "/", component: UsersComponent }
                  //   ])
                  ],

  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }