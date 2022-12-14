import { TestBed } from '@angular/core/testing';

import { RegistroserviceconductorService } from './registroconductor.service';

describe('RegistroconductorService', () => {
  let service: RegistroserviceconductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroserviceconductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
