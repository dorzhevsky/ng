import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavigatorComponent } from "./navigator.component";
import { RouterModule } from "@angular/router";
import { UsersModule } from "./users/users.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UsersComponent } from "./users/users.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports:      [ BrowserModule, 
                  UsersModule,
                  DashboardModule,
                  RouterModule.forRoot(
                    [
                       { path: "dashboard", component: DashboardComponent },
                       { path: "users", component: UsersComponent },
                       { path: "", redirectTo: "dashboard", pathMatch: 'full' }
                    ], { useHash: true })
                  ],

  declarations: [ AppComponent, NavigatorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }