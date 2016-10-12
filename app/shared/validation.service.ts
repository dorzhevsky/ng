import {
    FormControl,
 } from '@angular/forms'
export class ValidationService
{
    public static getMessage(control: FormControl): string
    {
        if (!control.errors)
        {
            return "";
        }

        for(var prop in control.errors)
        {            
            if (ValidationService.Messages[prop])
            {
                return ValidationService.Messages[prop];
            }            
        }

        return "";
    }

    private static get Messages()
    {
        return  {
            "required": "Необходимо задать значение"
        }
    }
}