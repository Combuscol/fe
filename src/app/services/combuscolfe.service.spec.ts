import { TestBed } from '@angular/core/testing';

import { CombuscolfeService } from './combuscolfe.service';

describe('CombuscolfeService', () => {
  let service: CombuscolfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombuscolfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
