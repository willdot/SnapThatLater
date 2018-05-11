import { TestBed, inject } from '@angular/core/testing';

import { GoogleLocationService } from './google-location.service';

describe('GoogleLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleLocationService]
    });
  });

  it('should be created', inject([GoogleLocationService], (service: GoogleLocationService) => {
    expect(service).toBeTruthy();
  }));
});
