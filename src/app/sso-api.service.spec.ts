import { TestBed, inject } from '@angular/core/testing';

import { SSOApiService } from './sso-api.service';

describe('SsoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SSOApiService]
    });
  });

  it('should be created', inject([SSOApiService], (service: SSOApiService) => {
    expect(service).toBeTruthy();
  }));
});
