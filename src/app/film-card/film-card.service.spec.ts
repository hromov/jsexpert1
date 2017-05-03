import { TestBed, inject } from '@angular/core/testing';

import { FilmCardService } from './film-card.service';

describe('FilmCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmCardService]
    });
  });

  it('should ...', inject([FilmCardService], (service: FilmCardService) => {
    expect(service).toBeTruthy();
  }));
});



