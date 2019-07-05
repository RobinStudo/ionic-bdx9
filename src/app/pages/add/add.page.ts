import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../../model/place';
import { PlaceService } from '../../services/place.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    private place: Place = new Place();
    private categories: Array<string> = [
        'Pub', 'Bar Rock', 'Bar à rhum', 'Bar de nuit'
    ];

    constructor( private router: Router, private placeService: PlaceService ){}

    ngOnInit(){
    }

    save(){
        this.place.createdAt = new Date();
        this.placeService.add( this.place ).then( data => {
            this.place = new Place();
            this.router.navigate( ['/list'] );
        });
    }

}
