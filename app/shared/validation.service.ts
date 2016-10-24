import {
    FormControl,
 } from '@angular/forms'
export class ValidationService
{
    public getMessage(control: FormControl): string
    {
        if (!control.errors)
        {
            return "";
        }

        for(var prop in control.errors)
        {            
            if (this.Messages[prop])
            {
                return this.Messages[prop];
            }            
        }

        return "";
    }

    protected get Messages()
    {
        return  {
            "required": "Необходимо задать значение"
        }
    }
}

export class CustomValidationService extends ValidationService
{
    protected get Messages()
    {
        return  {
            "required": "Value is required"
        }   
    }
}