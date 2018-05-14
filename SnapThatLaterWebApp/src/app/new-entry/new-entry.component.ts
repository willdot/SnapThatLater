import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { loadavg } from 'os';
import { GoogleLocationService } from '../services/google-location.service';
import { SnapEntryInterface } from '../models/snap-entry-interface';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() onSaved = new EventEmitter<SnapEntryInterface>();

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

    let outPut : SnapEntryInterface = {
      description: 'Something',
      location: this.location,
      photo: this.image
    }

    this.onSaved.emit(outPut);
  }

  onCancelClicked() : void {
    this.onSaved.emit(null);
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


