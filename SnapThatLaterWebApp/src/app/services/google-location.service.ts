import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'

@Injectable()
export class GoogleLocationService {

  constructor(private _http: HttpClient) { }


  getLocationFromCoords(coords: Array<number>) : Observable<any> {

    return this._http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords[0]},${coords[1]}&key=`)
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    if (err.statusText != null) {
      console.log(err.statusText);
    }
    return Observable.throw(err.status);
  }
}
