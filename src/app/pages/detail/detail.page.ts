import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Place } from '../../model/place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{
    private place: Place;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private placeService: PlaceService
    ){}

    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.place = this.placeService.get( id );
    }
}
