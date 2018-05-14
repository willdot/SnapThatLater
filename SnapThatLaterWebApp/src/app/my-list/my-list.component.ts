import { Component, OnInit } from '@angular/core';
import { SnapEntryInterface } from '../models/snap-entry-interface';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newEntry: boolean = false;
  entries: SnapEntryInterface[] = [];

  onNewClicked(): void {
    this.newEntry = true;
  }

  onSavedEntryCompleted(saved: SnapEntryInterface) {
    this.newEntry = false;
    if (saved != null) {
      this.entries.push(saved);
    }
  }

}
