import { TestBed, inject } from '@angular/core/testing';

import { SsoService } from './sso.service';

describe('SsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SsoService]
    });
  });

  it('should be created', inject([SsoService], (service: SsoService) => {
    expect(service).toBeTruthy();
  }));
});
