import { Component, OnInit } from '@angular/core';
import { SnapEntryInterface } from '../models/snap-entry-interface';
import { EntryService } from '../services/entry-service/entry.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  newEntry = false;
  // entries: SnapEntryInterface[] = [];

  currentEntry: SnapEntryInterface = null;

  public EntryService: EntryService;

  constructor(entryService: EntryService) {
    this.EntryService = entryService;
   }

  ngOnInit() {
    this.createFakeEntry('Something', [1, 2], '');
    this.createFakeEntry('Something else', [9, 2], '');
  }

  onNewClicked(): void {
    this.newEntry = true;
  }

  onEntryClicked(entry: SnapEntryInterface): void {
    this.currentEntry = this.EntryService.entries.find( p => p === entry);
    console.log(this.currentEntry);
  }

  onSavedEntryCompleted(saved: SnapEntryInterface) {
    this.newEntry = false;
    if (saved != null) {
      this.EntryService.entries.push(saved);
    }
  }

  onDeleteEntryClicked(): void {
    this.EntryService.entries = this.EntryService.entries.filter(p => p !== this.currentEntry);
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

    this.EntryService.entries.push(entry);
  }
}
