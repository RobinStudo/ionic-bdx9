import { Directive, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[truncateText]'
})
export class TruncateTextDirective implements AfterViewInit{
    @Input('truncateText') length: number;

    private fullText: string;
    private expanded: boolean;

    constructor( private el: ElementRef ){}

    ngAfterViewInit(){
        if( this.length == "" ){
            this.length = 40;
        }

        this.fullText = this.el.nativeElement.innerHTML;

        this.cut();
        this.expanded = false;
    }

    @HostListener('click') toggle(){
        if( this.expanded ){
            this.cut();
        }else{
            this.el.nativeElement.innerHTML = this.fullText;
        }

        this.expanded = !this.expanded;
    }

    cut(){
        let cut = this.fullText.slice( 0, this.length );
        this.el.nativeElement.innerHTML = cut;
    }
}
