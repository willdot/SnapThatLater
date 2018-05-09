import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() onSaved = new EventEmitter<boolean>();
  @ViewChild('googlemap') gmapElement: any;
  
  map: google.maps.Map;
  marker: google.maps.Marker;
  
  constructor() { }

  ngOnInit() {
    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
  }

  onFindMe() : void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showMe(position);
      });
    } else {
      alert("Geolocation not available for this browser");
    } 
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

  onSaveClicked() : void {
    this.onSaved.emit(false);
  }

}
