import { TestBed } from '@angular/core/testing';

import { OmnicellService } from './omnicell-details.service';

describe('OmnicellServiceService', () => {
  let service: OmnicellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmnicellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
