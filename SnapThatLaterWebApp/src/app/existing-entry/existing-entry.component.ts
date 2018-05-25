import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GoogleLocationService } from '../services/google-location.service';
import { SnapEntryInterface } from '../models/snap-entry-interface';
import { EntryService } from '../services/entry-service/entry.service';

@Component({
  selector: 'app-existing-entry',
  templateUrl: './existing-entry.component.html',
  styleUrls: ['./existing-entry.component.css']
})
export class ExistingEntryComponent implements OnInit {
  @Input() entry: SnapEntryInterface;
  @Output() Saved = new EventEmitter<SnapEntryInterface>();

  showCamera = false;
  showMap = false;

  mapButton = 'Find Me';
  photoButton = 'Add Photo';

  description = '';
  location: Array<number> = [];
  image = '';

  googleResult: any;

  public EntryService: EntryService;

  constructor(private googleLocation: GoogleLocationService, entryService: EntryService) {
    this.EntryService = entryService;
  }

  ngOnInit() {
    this.description = this.entry.description;
    this.location = this.entry.location;
    this.image = this.entry.photo;
    this.googleResult = this.entry.locationName;

    if (this.entry.photo !== '') {
      this.photoButton = 'Retake photo';
    }

    if (this.entry.location[0] !== 0 && this.entry.location[1] !== 0) {
      this.mapButton = 'Show location';
    }
  }

  onSaveClicked(): void {

    const outPut: SnapEntryInterface = {
      description: this.description,
      location: this.location,
      locationName: this.googleResult,
      photo: this.image
    };

    console.log(outPut);
    this.Saved.emit(outPut);
  }

  onCancelClicked(): void {
    this.Saved.emit(null);
  }

  onDeleteClicked(): void {}

  onShowCameraClicked(): void {
    this.showCamera = !this.showCamera;
  }

  onShowMapClicked(): void {
    this.showMap = !this.showMap;
  }

  onCameraSavedComplete(cameraImage: string) {
    this.image = cameraImage;
    this.showCamera = false;

  }

  onLocationSavedCompleted(location: Array<number>) {}
}
