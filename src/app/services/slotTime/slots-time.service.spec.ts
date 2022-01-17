import { TestBed } from '@angular/core/testing';

import { SlotsTimeService } from './slots-time.service';

describe('SlotsTimeService', () => {
  let service: SlotsTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotsTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
