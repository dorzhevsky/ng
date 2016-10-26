import { Directive, HostListener, Input, Output, EventEmitter } from "@angular/core";

@Directive({    
  selector: '[mfiConfirm]'
})
export class ConfirmDirective
{
    @Input()
    public message: string;

    @Output()
    public confirm:EventEmitter<any> = new EventEmitter();

    @HostListener('click')
    public Click()
    {
        if (confirm(this.message))
        {
            this.confirm.emit(true);
        }
    }
}