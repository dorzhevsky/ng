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

import { ConfirmDirective } from "./confirm";
import { Generator } from "./generator";
import { MfiTooltipComponent } from "./tooltip.component";
import 'jquery';
//import * as _ from 'lodash';
declare var $:JQueryStatic;
@Directive({
    selector:"[mfitooltip]"
})
export class MfiTooltipDirective implements OnInit
{

    constructor(private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver)
    {

    }

    private tooltipComponentHost: ComponentRef<MfiTooltipComponent>;

    private _enabled: boolean = false;
    private _visible: boolean;

    @Input() public messages: any;

    @Input() public formControl: FormControl

    @Input() public set enabled(value:boolean)
    {
    }

    public ngOnInit()
    {
        let that = this;
        this.formControl.statusChanges.subscribe(()=>
        {
            that.check();
        });
        this.check();
    }

    private check()
    {
        this._enabled = !this.formControl.valid;

        if (!this._enabled)
        {
            this.hideTooltip();
            return;
        }

        if (this._visible)
        {
            this.hideTooltip();
            this.showTooltip();
            return;
        }

        if ($(this.viewContainerRef.element.nativeElement).is(":focus"))
        {
            this.showTooltip();
        }        
    }

    @HostListener('focusin', ['$event', '$target'])
    @HostListener('mouseenter', ['$event', '$target'])    
    private showTooltip()
    {
        if (!this._enabled || this._visible)
        {
            return;
        }

        this._visible = true;


        let componentFactory = this.componentFactoryResolver
                                   .resolveComponentFactory(MfiTooltipComponent);

        this.tooltipComponentHost = this.viewContainerRef.createComponent(componentFactory);
        this.tooltipComponentHost.instance.ReferenceElement = this.viewContainerRef.element;
        this.tooltipComponentHost.instance.Text = this.text;
    }

    @HostListener('focusout', ['$event', '$target'])
    @HostListener('mouseleave', ['$event', '$target'])
    private hideTooltip()
    {
        if (this._visible)
        {
            this.tooltipComponentHost.destroy();
            this._visible = false;
        }        
    }   


    public get text():string {

        if (!this.formControl.errors)
        {
            return "";
        }

        for(var prop in this.messages)
        {
            if (this.formControl.errors[prop])
            {
                return this.messages[prop];
            }            
        }

        return "";
    }
}