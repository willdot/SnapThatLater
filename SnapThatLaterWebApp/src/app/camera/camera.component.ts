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

  @Output() CameraSaved = new EventEmitter<string>();

  photoTaken = false;
  maxCameraWidth: number;
  maxCameraHeight: number;
  cameraImage: WebcamImage;

  private cameraTrigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.maxCameraHeight = window.innerHeight;
    this.maxCameraWidth = window.innerWidth;
  }

  takePhotoClick(): void {
    this.cameraTrigger.next();
  }

  onSaveCameraClick(): void {
    this.CameraSaved.emit(this.cameraImage.imageAsDataUrl);
  }

  onCancelCameraClick(): void {

    this.CameraSaved.emit('');
  }

  onRetakeClick(): void {
    this.photoTaken = false;
    this.cameraImage = null;
  }

  public handleImage(cameraImage: WebcamImage): void {
    const self = this;
    this.photoTaken = true;
    self.cameraImage = cameraImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.cameraTrigger.asObservable();
  }
}

