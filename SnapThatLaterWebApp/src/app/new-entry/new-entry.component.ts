import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  @Output() onSaved = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  onSaveClicked() : void {
    this.onSaved.emit(false);
  }

}
