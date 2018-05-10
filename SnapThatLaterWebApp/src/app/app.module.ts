import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { MyListComponent } from './my-list/my-list.component';
import { CameraComponent } from './camera/camera.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {path: '', component: MyListComponent},
  {path: 'my-list', component: MyListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent,
    MyListComponent,
    CameraComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
