import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MfiTooltipDirective  } from "./tooltip.directive";
import { MfiTooltipComponent } from "./tooltip.component";
import { MfiDdlistComponent } from "../shared/ddlist";
import { ConfirmDirective } from "../shared/confirm"
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ValidationService, CustomValidationService } from "./validation.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [  
                  ConfirmDirective,
                  MfiTooltipDirective,
                  MfiTooltipComponent,
                  MfiDdlistComponent 
                  ],
  exports:       [  
                  ConfirmDirective,
                  MfiTooltipDirective,
                  MfiDdlistComponent 
                  ],                  
  entryComponents: [MfiTooltipComponent],
  providers: [ValidationService]
})
export class SharedModule { }