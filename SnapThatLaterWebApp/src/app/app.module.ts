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
import { GoogleLocationService } from './services/google-location.service';
import { EntryService} from './services/entry-service/entry.service';
import { HttpClientModule } from '@angular/common/http';
import { ExistingEntryComponent } from './existing-entry/existing-entry.component';

const appRoutes: Routes = [
  {path: '', component: MyListComponent},
  {path: 'my-list', component: MyListComponent},
  {path: '**', redirectTo: 'my-list'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent,
    MyListComponent,
    CameraComponent,
    MapComponent,
    ExistingEntryComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: false}),
    HttpClientModule
  ],
  providers: [GoogleLocationService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
