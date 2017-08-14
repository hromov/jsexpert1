import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPopularComponent } from './film-popular.component';

describe('FilmPopularComponent', () => {
  let component: FilmPopularComponent;
  let fixture: ComponentFixture<FilmPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
