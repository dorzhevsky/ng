import { Component } from '@angular/core';

@Component({
  selector: 'navigator',  
  template: `
            <div class="page-sidebar-wrapper" id="main-menu-wrapper" style="overflow: hidden; width: auto; height: 837px;">
                <ul class="nav nav-list">
                    <li [routerLink]="['dashboard']" [routerLinkActive]="['active']">
                        <a href="javascript:void(0);">
                            <i class="icon-custom-home"></i>
                            <span class="title">Главное</span>
                        </a>
                    </li>
                    <li [routerLink]="['users']"  [routerLinkActive]="['active']">
                        <a href="javascript:void(0);">
                            <i class="fa fa-shield"></i>
                            <span class="title">Пользователи</span>
                        </a>
                    </li>
                </ul>
            </div>`
})
export class NavigatorComponent {
  constructor() {      
  }
}