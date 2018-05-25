import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() ExistingLocation: Array<number>;
  @Output() LocationSaved = new EventEmitter<Array<number>>();
  @ViewChild('googlemap') gmapElement: any;

  map: google.maps.Map;
  marker: google.maps.Marker;

  long: number;
  lat: number;
  found: boolean;
  errorMessage = '';

  constructor() {}

  ngOnInit() {
    console.log('something');
    const mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);

    this.findMe();
  }

  showMe(lat: number, long: number): void {
    const location = new google.maps.LatLng(lat, long);

    this.map.setCenter(location);

    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'This is your current location'
    });

    this.found = true;
  }

  findMe(): void {
    if (this.ExistingLocation != null) {
      this.showMe(this.ExistingLocation[0], this.ExistingLocation[1]);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            this.showMe(position.coords.latitude, position.coords.longitude);
            this.errorMessage = '';
          },
          error => {
            console.log(`Not working: ${error.message}`);
            this.errorMessage = 'Failed to locate. Please try again.';
          },
          {
            maximumAge: 1000,
            timeout: 35000
          }
        );
      } else {
        alert('Geolocation not available for this browser');
      }
    }
  }

  onRelocateMeClicked(): void {
    if (!this.lat || !this.long) {
      this.findMe();
    } else {
      this.showMe(this.lat, this.long);
    }
  }

  onRetryClicked(): void {
    this.errorMessage = '';
    this.findMe();
  }

  onSaveLocationClicked(): void {
    const result: Array<number> = [this.lat, this.long];

    this.LocationSaved.emit(result);
  }

  onCancelClicked(): void {
    const result: Array<number> = [0, 0];

    this.LocationSaved.emit(result);
  }
}
