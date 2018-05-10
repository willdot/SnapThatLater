import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Output() onCameraSaved = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  onSaveCameraClick() : void {
    this.onCameraSaved.emit('saved');
  }

  onCancelCameraClick() : void {

    this.onCameraSaved.emit('cancelled');
  }
}
