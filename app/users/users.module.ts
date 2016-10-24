import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersListComponent } from './usersList';
import { UserHeaderComponent } from "./userHeader";
import { UserEditorComponent } from "./userEditor";
import { RoleEditorComponent } from "./role.editor.component";
import { MfiDdlistComponent } from "../shared/ddlist";
import { TreeComponent } from "./tree.component";
import { UsersService } from "./users.service";
import { ConfirmDirective } from "../shared/confirm"
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule }   from '../shared/shared.module';
import { UsersComponent } from "./users.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, SharedModule ],
  declarations: [
                  UsersComponent,          
                  UsersListComponent, 
                  UserHeaderComponent, 
                  UserEditorComponent,
                  RoleEditorComponent,
                  TreeComponent
                  ],
  exports:       [  
                  UsersComponent,
                  UsersListComponent, 
                  UserHeaderComponent, 
                  UserEditorComponent,
                  RoleEditorComponent,                  
                  TreeComponent
                  ],
 providers:[UsersService]                  
})
export class UsersModule { }