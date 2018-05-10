import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() onLocationSaved = new EventEmitter<Array<number>>();
  @ViewChild('googlemap') gmapElement: any;
  
  map: google.maps.Map;
  marker: google.maps.Marker;

  long: number;
  lat: number;

  constructor() { }

  ngOnInit() {
    console.log('something');
    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);

    this.findMe();
  }

  showMe(position) : void {
    
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   
    this.map.setCenter(location);

    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'This is your current location'
    });
  }

  findMe() : void {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.showMe(position);
      },
      error => {
        console.log('nope');
      },
      {
        maximumAge:1000,
        timeout: 15000
      }
    );
    } else {
      alert("Geolocation not available for this browser");
    } 
  }

  onSaveLocationClicked() : void {

    let result : Array<number> = [this.lat, this.long]

    this.onLocationSaved.emit(result);
  }

}
