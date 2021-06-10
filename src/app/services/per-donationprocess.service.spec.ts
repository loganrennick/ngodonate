import { TestBed } from '@angular/core/testing';

import { PerDonationprocessService } from './per-donationprocess.service';

describe('PerDonationprocessService', () => {
  let service: PerDonationprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerDonationprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
