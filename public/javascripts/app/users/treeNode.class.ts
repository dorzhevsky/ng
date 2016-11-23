var _ = require('lodash');

export class TreeNode<T>
{
    private children: TreeNode<T>[] = [];
    private parent: TreeNode<T>;

    constructor(private value: T, children: TreeNode<T>[])
    {
        this.children = children || [];        
        this.children.forEach(e => e.parent = this);
    }

    public get Value()
    {
        return this.value;
    }

    public AddNode(node: TreeNode<T>)
    {
        node.parent = this;
        this.children.push(node);
    }

    public get Children()
    {
        return this.children;
    }

    public get Parent()
    {
        return this.parent;
    }

    public Checked: boolean;

    public Indeterminate: boolean;

    public Check(checked: boolean)
    {
        this.CheckInternal(checked, true, true);
    }

    public CheckInternal(checked: boolean, up: boolean, down: boolean)
    {
        this.Checked = checked; 
        this.Indeterminate = false;

        if (down)
        {
            if (this.children)
            {
                _.each(this.children, e => e.CheckInternal(checked, false, true));
            }
        }

        if (up)
        {
            if (this.parent)
            {
                let siblings = this.parent.children;
                var allSiblingsAreChecked = _.every(siblings, e =>e.Checked);
                if (allSiblingsAreChecked)
                {
                    this.parent.CheckInternal(true,true,false);
                    return;
                }
                var allSiblingsAreUncheked = _.every(siblings, e=>!e.Checked);
                if (allSiblingsAreUncheked)
                {
                    this.parent.CheckInternal(false, true, false);
                    return;
                }
                this.parent.indeterminate();
            }            
        }
    }


    private indeterminate()
    {
        this.Indeterminate = true;
        this.Checked = false;
        if (this.parent)
        {
            this.parent.indeterminate();
        }
    }

    public getSelectedItems(): Array<T>
    {
        let selectedItems:Array<T> = [];
        this.getSelectedItemsInternal(selectedItems);
        return selectedItems;
    }

    private getSelectedItemsInternal(selectedItems: Array<T>)
    {
        // console.log("getSelectedItemsInternal");
        // console.log(this.Value);
        // console.log(this.Checked);
        if (this.Checked)
        {
            selectedItems.push(this.value);
        }
        if (this.Children && this.Children.length > 0)
        {
            _.each(this.Children, c=>c.getSelectedItemsInternal(selectedItems));
        }
    }
}