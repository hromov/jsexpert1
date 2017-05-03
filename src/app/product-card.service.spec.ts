import { TestBed, inject } from '@angular/core/testing';

import { ProductCardService } from './product-card.service';

describe('ProductCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCardService]
    });
  });

  it('should ...', inject([ProductCardService], (service: ProductCardService) => {
    expect(service).toBeTruthy();
  }));
});
