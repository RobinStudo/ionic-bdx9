import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateTextDirective } from './directive/truncate-text.directive';
import { CategoryIconPipe } from './pipes/category-icon.pipe';

@NgModule({
    declarations: [TruncateTextDirective, CategoryIconPipe],
    imports: [
        CommonModule
    ],
    exports: [TruncateTextDirective, CategoryIconPipe]
})
export class SharedModule{}
