import { Component, OnInit } from '@angular/core';
import { SnapEntryInterface } from '../models/snap-entry-interface';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  newEntry = false;
  entries: SnapEntryInterface[] = [];

  currentEntry: SnapEntryInterface = null;

  constructor() { }

  ngOnInit() {
    this.createFakeEntry('Something', [1, 2], '');
    this.createFakeEntry('Something else', [9, 2], '');
  }

  onNewClicked(): void {
    this.newEntry = true;
  }

  onEntryClicked(entry: SnapEntryInterface): void {
    this.currentEntry = this.entries.find( p => p === entry);
  }

  onSavedEntryCompleted(saved: SnapEntryInterface) {
    this.newEntry = false;
    if (saved != null) {
      this.entries.push(saved);
    }
  }

  onDeleteEntryClicked(): void {
    this.entries = this.entries.filter(p => p !== this.currentEntry);
    this.currentEntry = null;
  }

  onCancelClicked(): void {
    this.currentEntry = null;
  }

  createFakeEntry(description: string, location: Array<number>, photo: string): void {
    const entry: SnapEntryInterface = {
      description: description,
      location: location,
      photo: photo
    };

    this.entries.push(entry);
  }
}
