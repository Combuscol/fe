import { TestBed } from '@angular/core/testing';

import { GetServicesService } from './get-services.service';

describe('GetServicesService', () => {
  let service: GetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
