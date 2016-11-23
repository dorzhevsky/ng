import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({    
  selector: '[mfiConfirm]'
})
export class ConfirmDirective
{
    @Output()
    public confirm:EventEmitter<any> = new EventEmitter();

    @HostListener('click')
    public Click()
    {
        //TODO
        if (confirm("Удалить пользователя?"))
        {
            this.confirm.emit(true);
        }
    }
}