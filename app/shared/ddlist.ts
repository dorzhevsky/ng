import 
{ 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    ElementRef,  
    forwardRef,
    OnInit 
} from "@angular/core";

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component(
{
    template: `
    <div class="btn-group" [class.open]="isOpen" style="margin-top:5px;">
        <button type="button" (click)="toggle()" class="btn btn-white dropdown-toggle btn-small" data-toggle="dropdown">{{selectedText}} <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li *ngFor="let item of _items;" (click)="selectItem(item)">
                <a href="javascript:void(0)">{{item.Name}}</a>
            </li>
        </ul>
    </div>`,
    selector: "mfiddlist",
    host: {
        '(document:click)': 'onClick($event)',
    },    
    providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MfiDdlistComponent),
      multi: true
    }
  ]    
})
export class MfiDdlistComponent implements ControlValueAccessor, OnInit
{
    private _items:Array<any>;
    private _defaultText:string;

    @Input() public set defaultText(v:string)
    {
        console.log("defaultValue setter");
        this._defaultText = v;
    }

    @Input() public set items(i:Array<any>)
    {
        console.log("items setter");
        this._items = i;
    }

    writeValue(value: any) {
        console.log("write value");
        if (value !== undefined) {
            this.selectedItem = value;
        }
    }

    propagateChange = (_: any) => {};

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}    

    private _selectedItem: any;

    //Название обязано быть таким!!!!
    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() public set selectedItem(val:any) {
        console.log("selectedItem setter");
        this._selectedItem = val;
        this.selectedItemChange.emit(this._selectedItem);
        this.propagateChange(this._selectedItem);
    }

    public ngOnInit()
    {
        console.log("OnInit");
    }

    public get  selectedItem(): any{
        return this._selectedItem;
    }

    private isOpen: boolean = false;

    constructor(private element: ElementRef)
    {

    } 

    private toggle()
    {
        this.isOpen = !this.isOpen;
    }

    private close()
    {
        this.isOpen = false;
    }

    private open()
    {
        this.isOpen = true;
    }

    private onClick(e)
    {   
        // if (!this.element.nativeElement.contains(e.target)) {
        //     this.close();
        // }
    }

    private selectItem(item:any)
    {
        this.selectedItem = item;
        this.close();
    }

    private get selectedText(): string
    {
        return !this.selectedItem ? this._defaultText : this.selectedItem.Name; 
    }
}