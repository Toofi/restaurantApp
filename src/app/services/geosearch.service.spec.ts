import { TestBed } from '@angular/core/testing';

import { GeosearchService } from './geosearch.service';

describe('GeosearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeosearchService = TestBed.get(GeosearchService);
    expect(service).toBeTruthy();
  });
});
