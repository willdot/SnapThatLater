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

  }

  onSaveClicked(): void {}

  onCancelClicked(): void {
    this.Saved.emit(null);
  }

  onDeleteClicked(): void {}

  onShowCameraClicked(): void {}

  onShowMapClicked(): void {}

  onCameraSavedComplete(cameraImage: string) {}

  onLocationSavedCompleted(location: Array<number>) {}
}
