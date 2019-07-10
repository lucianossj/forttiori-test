import { TestBed } from '@angular/core/testing';

import { GetItineraryService } from './get-itinerary.service';

describe('GetItineraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetItineraryService = TestBed.get(GetItineraryService);
    expect(service).toBeTruthy();
  });
});
