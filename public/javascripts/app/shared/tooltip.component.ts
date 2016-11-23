import { 
    Component, 
    EventEmitter, 
    Output, 
    Input, 
    Directive,
    ViewContainerRef, 
    ComponentFactoryResolver,
    OnChanges, 
    ComponentRef,
    ElementRef,
    HostListener,
    ReflectiveInjector,
    OnInit,
    SimpleChanges
} from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControl,
    FormsModule,
    ReactiveFormsModule
 } from '@angular/forms';

import { ConfirmDirective } from "../shared/confirm";
import { Generator } from "../shared/generator";
import 'jquery';

var _ = require('lodash');

@Component({
    template:
    `<div style="opacity:1;left:-10000px;top:-10000px;" class="tooltip tooltip-top" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">
            {{text}}
        </div>
     </div>
    `
})
export class MfiTooltipComponent
{
    private element: ElementRef;
    private text: string;

    @Input() public set Text(val:string) {
        this.text = val;
        this.position(this.element.nativeElement, this.ReferenceElement.nativeElement);
    }

    @Input() public ReferenceElement: ElementRef;

    constructor(element: ElementRef)
    {
        this.element = element;
    }    

    private position(popup: HTMLElement, input: HTMLElement)
    {
        setTimeout(()=>
        {
            var popupContainer = $(popup).children().eq(0);
            var inputEl = $(input);

            popupContainer.css(
            {
                position:"absolute",
                left: inputEl.position().left + inputEl.outerWidth()/2 - popupContainer.outerWidth()/2,
                top: inputEl.position().top - popupContainer.outerHeight() - 5
            });
        }, 0);
    }    
}