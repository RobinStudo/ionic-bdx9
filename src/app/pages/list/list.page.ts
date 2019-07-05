import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

import { Place } from '../../model/place';
import { PlaceService } from '../../services/place.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage {
    private places: Array<Place> = [];

    constructor(
        private sanitizer: DomSanitizer,
        private alertCtrl: AlertController,
        private placeService: PlaceService
    ){}

    ionViewWillEnter(){
        this.placeService.getAll().then( places => {
            this.places = places;
        });
    }

    async showPreview(){
        const alert = await this.alertCtrl.create({
            header: 'Bientôt disponible',
            message: 'Notre application est pour le moment en version Preview, soyez patients',
            buttons: ['D\'accord']
        });

        alert.present();
    }
}
