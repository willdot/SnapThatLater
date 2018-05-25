import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  description = '';
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
      description: this.description,
      location: this.location,
      locationName: this.googleResult,
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
        if (result != null && result['results'].length > 0) {
          this.convertGoogleLocationResult(result);
        }
      });
  }

  convertGoogleLocationResult(googleLocation): void {
    this.googleResult =
      `${googleLocation['results'][0]['address_components'][1]['long_name']},
       ${googleLocation['results'][0]['address_components'][2]['long_name']}`;
  }

  onCameraSavedComplete(cameraImage: string) {
    this.image = cameraImage;
    this.showCamera = false;
  }
}
