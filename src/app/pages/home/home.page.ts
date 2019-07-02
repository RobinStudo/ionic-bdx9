import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage{
    private slides: Array<string>;
    private sliderOptions: any;

    constructor( private sanitizer: DomSanitizer ){
        this.slides = [
            'https://media-cdn.tripadvisor.com/media/photo-s/08/2c/a7/13/cloud-9-sky-bar-lounge.jpg',
            'https://asset.montecarlosbm.com/styles/hero_image_desktop_2x/public/media/orphea/sbm_bb_bar_0003_1_id47390_rsz_2.jpg?itok=IRiLDy9t',
            'http://www.amanogroup.de/wp-content/uploads/2015/08/0211.jpg'
        ];

        this.sliderOptions = {
            loop: true,
            autoplay: true,
        };
    }

}
