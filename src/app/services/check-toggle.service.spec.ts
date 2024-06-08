import { TestBed } from '@angular/core/testing';

import { CheckToggleService } from './check-toggle.service';

describe('CheckToggleService', () => {
  let service: CheckToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
