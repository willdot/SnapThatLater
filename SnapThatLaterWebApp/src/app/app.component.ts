import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Snap that later!';
  newEntry: boolean = false;


  onNewClicked() : void {
    this.newEntry = true;
  }

  onSavedEntryCompleted(saved: boolean) {
    this.newEntry = saved;
  }
}
