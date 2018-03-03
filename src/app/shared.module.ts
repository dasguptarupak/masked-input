import { NgModule, ModuleWithProviders }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { MaskedInputFormatterDirective } from './masked-input-formatter.directive';
import { MaskedInputPipe } from './masked-input.pipe';
 
@NgModule({
    imports: [
        CommonModule, 
        FormsModule
    ],  // module dependencies

    declarations: [
        MaskedInputPipe,
        MaskedInputFormatterDirective
    ],  // components and directives

    exports: [ 
        CommonModule, 
        FormsModule, 
        MaskedInputFormatterDirective, 
        MaskedInputPipe 
    ],
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

}