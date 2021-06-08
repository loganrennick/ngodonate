import { TestBed } from '@angular/core/testing';

import { DonationTypeService } from './donation-type.service';

describe('DonationTypeService', () => {
  let service: DonationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
