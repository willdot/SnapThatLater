import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { loadavg } from 'os';
import { GoogleLocationService } from '../services/google-location.service';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() onSaved = new EventEmitter<boolean>();

  showCamera: boolean = false;
  showMap: boolean = false;

  location: Array<number> = [];
  image: string = '';

  googleResult: any;

  constructor(private googleLocation: GoogleLocationService) { }

  ngOnInit() {
  }

  onShowCameraClicked(): void {
    this.showCamera = !this.showCamera;
  }

  onShowMapClicked(): void {
    this.showMap = !this.showMap;
  }

  onSaveClicked(): void {
    this.onSaved.emit(false);
  }

  onLocationSavedCompleted(location: Array<number>) {
    this.showMap = false;
    if (location[0]!= 0 && location[1]!=0) {
      this.location = location;

      this.getCityNameFromCoords();
    }
  }

  onCameraSavedComplete(cameraImage: string) {
    this.image = cameraImage;
    this.showCamera = false;
  }

  getCityNameFromCoords(): void {
    this.googleLocation.getLocationFromCoords(this.location)
      .subscribe(result => {
        this.googleResult = result;
      });
  }


}


