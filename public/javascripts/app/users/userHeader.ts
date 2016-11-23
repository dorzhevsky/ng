import { Component, EventEmitter, Output, Input } from "@angular/core";
import { User } from "./user";
import { Generator } from "../shared/generator";

@Component({
   selector:"userHeader",
   template: `
   <div class="grid-title no-border">
        <div class="row users-header-area" style="vertical-align: text-top;">
            <div class="col-sm-12">
                <div id="users-selected-header">{{Name}}</div>
            </div>
            <div class="col-sm-12" id="users-new-description-area">
                <div id="users-new-description">{{Role}}</div>
            </div>
        </div>
  </div>`
})
export class UserHeaderComponent
{
    @Input() public selectedUser: User;

    constructor()
    {
    }

    public get Name(): string
    {
        if (!this.selectedUser || this.selectedUser.Id === 0)
        {
            return "Новый пользователь";
        }
        return this.selectedUser.Name;
    }

    public get Role(): string
    {
        if (!this.selectedUser || this.selectedUser.Id === 0)
        {
            return "";
        }
        return this.selectedUser.Role.Name;
    }    
}