import { Injectable } from '@angular/core';
import { SnapEntryInterface } from '../../models/snap-entry-interface';

@Injectable()
export class EntryService {

  entries: SnapEntryInterface[] = [];




  constructor() { }

}
