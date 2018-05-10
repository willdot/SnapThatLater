import { Component, OnInit } from '@angular/core';

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

  onNewClicked(): void {
    this.newEntry = true;
  }

  onSavedEntryCompleted(saved: boolean) {
    this.newEntry = saved;
  }

}
