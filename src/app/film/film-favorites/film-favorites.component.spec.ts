import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFavoritesComponent } from './film-favorites.component';

describe('FilmFavoritesComponent', () => {
  let component: FilmFavoritesComponent;
  let fixture: ComponentFixture<FilmFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
