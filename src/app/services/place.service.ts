import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../model/place';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {
    private places: Array<Place>;

    constructor( private http: HttpClient ){}

    getAll(){
        return this.http.get<Array<Place>>( 'http://localhost:3000/places' ).toPromise();
    }

    get( id: number ){
        return this.http.get<Place>( 'http://localhost:3000/places/' + id ).toPromise();
    }
}
