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
    SimpleChanges,
    Injectable
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
import { ValidationService,CustomValidationService  } from "./validation.service";

@Directive({
    selector:"[mfitooltip]",
    providers: [
    {provide: ValidationService, useClass: CustomValidationService }
  ],
})
export class MfiTooltipDirective implements OnInit, OnChanges
{

    constructor(private validationService: ValidationService,
                private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver)
    {
        console.log("XXX");
        console.log(this.validationService);
        for(var p in this.validationService)
        {
            console.log(p);
            console.log(this.validationService[p]);
        }
    }

    private tooltipComponentHost: ComponentRef<MfiTooltipComponent>;

    private _enabled: boolean = false;
    private _visible: boolean;

    @Input() public formControl: FormControl

    public ngOnInit()
    {
        this.check();
    }

    public ngOnChanges()
    {
        this.check();
    }

    @Input() public enabled;

    private check()
    {
        if (!this.enabled)
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
    }

    @HostListener('focusin', ['$event', '$target'])
    @HostListener('mouseenter', ['$event', '$target'])    
    private showTooltip()
    {
        if (!this.enabled || this._visible)
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
        return this.validationService.getMessage(this.formControl);
    }
}