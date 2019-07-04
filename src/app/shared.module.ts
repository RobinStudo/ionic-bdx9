import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateTextDirective } from './directive/truncate-text.directive';

@NgModule({
    declarations: [TruncateTextDirective],
    imports: [
        CommonModule
    ],
    exports: [TruncateTextDirective]
})
export class SharedModule{}
