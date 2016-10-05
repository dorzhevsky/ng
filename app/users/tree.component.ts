import 
{ 
    Component, 
    EventEmitter, 
    Output, 
    Input, 
    ElementRef,
    TemplateRef 
} from "@angular/core";
import { TreeNode } from "./treeNode.class";

@Component({
   selector:"tree",
   template: `
   <ul style="padding-left:0;">
        <li *ngFor="let p of tree; let i = index;" data-menu-item="true">
            <a href="javascript:void(0)">
                <div class="checkbox" style="display: inline-block;">
                    <input [indeterminate]="p.Indeterminate" (change)="check(p, $event.target.checked)" [checked]="p.Checked" [attr.id]="level + '_' + i" type="checkbox">
                    <label [attr.for]="level + '_' + i" >&nbsp;</label>
                </div>
            </a>
            <span (click)="toggle()" >
                <template [ngTemplateOutlet]="itemTemplate"
                          [ngOutletContext]="p">
                </template>
            </span>
            <div *ngIf="p.Children && p.Children.length > 0 && childrenVisible" style="padding-left: 15px;">
                <tree [level]="level + 1" [itemTemplate]="itemTemplate" [tree]="p.Children"></tree>
            </div>            
        </li>
   </ul>   
   `
})
export class TreeComponent
{
    private childrenVisible: boolean = false;

    @Input() public tree: TreeNode<any>[];

    @Input() public itemTemplate: TemplateRef<any>

    @Input() private level: number = 0;

    constructor()
    {
    }

    private toggle()
    {
        this.childrenVisible = !this.childrenVisible
    }

    public check(node: TreeNode<any>, checked: boolean)
    {
        node.Check(checked);
    }
}