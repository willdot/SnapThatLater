import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { loadavg } from 'os';
import { GoogleLocationService } from '../services/google-location.service';
import { SnapEntryInterface } from '../models/snap-entry-interface';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  @Output() Saved = new EventEmitter<SnapEntryInterface>();

  showCamera = false;
  showMap = false;

  location: Array<number> = [];
  image = '';

  googleResult: any;

  constructor(private googleLocation: GoogleLocationService) {}

  ngOnInit() {}

  onShowCameraClicked(): void {
    this.showCamera = !this.showCamera;
  }

  onShowMapClicked(): void {
    this.showMap = !this.showMap;
  }

  onSaveClicked(): void {
    const outPut: SnapEntryInterface = {
      description: 'Something',
      location: this.location,
      photo: this.image
    };

    this.Saved.emit(outPut);
  }

  onCancelClicked(): void {
    this.Saved.emit(null);
  }

  onLocationSavedCompleted(location: Array<number>) {
    this.showMap = false;
    if (location[0] !== 0 && location[1] !== 0) {
      this.location = location;

      this.getCityNameFromCoords();
    }
  }

  getCityNameFromCoords(): void {
    this.googleLocation
      .getLocationFromCoords(this.location)
      .subscribe(result => {
        this.googleResult = result;
      });
  }

  onCameraSavedComplete(cameraImage: string) {
    this.image = cameraImage;
    this.showCamera = false;
  }
}
