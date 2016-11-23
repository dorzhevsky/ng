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
    static CheckLogin(control : FormControl) : {[key : string] : boolean} {
        if (control.value && !control.value.match(/^[A-Za-z]/)) {
            return {invalidLogin : true};
        }
    }

    static CheckPassword(control : FormControl) : {[key : string] : boolean} {
        if (control.value && !control.value.match(/.{6,}/)) {
            return {invalidPassword : true};
        }
    }

    static CheckName(control : FormControl) : {[key : string] : boolean} {
        if (control.value && !control.value.match(/^[А-Яа-яA-Za-z]+$/)) {
            return {invalidName : true};
        }
    }

    protected get Messages()
    {
        return  {
            "invalidLogin": "Логин должен начинаться с латинской буквы",
            "invalidPassword": "Пароль должен содержать минимум 6 символов",
            "invalidName": "Имя должно содержать только буквы",
            "required": "Необходимо задать значение"
        }   
    }
}