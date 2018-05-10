import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() onSaved = new EventEmitter<boolean>();
  
  showCamera: boolean = false;
  showMap: boolean = false;
  
  constructor() { }

  ngOnInit() {
    
  }

  onShowCameraClicked() : void {
    this.showCamera = !this.showCamera;
  }

  onShowMapClicked() : void {
    this.showMap = !this.showMap;
  }

  onSaveClicked() : void {
    this.onSaved.emit(false);
  }

  onLocationSavedCompleted(location: Array<number>) {
    this.showMap = false;
    console.log(`Latitude: ${location[0]}`);
    console.log(`Longitude: ${location[1]}`);
  }

  onCameraSavedComplete(camera: string) {
    console.log(camera);
    this.showCamera = false;
  }


}
