import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingEntryComponent } from './existing-entry.component';

describe('ExistingEntryComponent', () => {
  let component: ExistingEntryComponent;
  let fixture: ComponentFixture<ExistingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
