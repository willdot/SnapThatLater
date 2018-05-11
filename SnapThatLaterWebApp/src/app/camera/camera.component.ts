import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Output() onCameraSaved = new EventEmitter<string>();

  photoTaken: boolean = false;
  maxCameraWidth : number;
  maxCameraHeight : number;
  cameraImage : WebcamImage;

  private cameraTrigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.maxCameraHeight = window.innerHeight;
    this.maxCameraWidth = window.innerWidth;
  }

  takePhotoClick() : void {
    this.cameraTrigger.next();
  }

  onSaveCameraClick() : void {
    this.onCameraSaved.emit(this.cameraImage.imageAsDataUrl);
  }

  onCancelCameraClick() : void {

    this.onCameraSaved.emit('');
  }

  onRetakeClick() : void {
    this.photoTaken = false;
    this.cameraImage = null;
  }

  public handleImage(cameraImage: WebcamImage): void {
    var self = this;
    this.photoTaken = true;
    self.cameraImage = cameraImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.cameraTrigger.asObservable();
  }
}

