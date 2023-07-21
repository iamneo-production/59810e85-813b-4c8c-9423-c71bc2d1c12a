import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistNavbarComponent } from './movielist-navbar.component';

describe('MovielistNavbarComponent', () => {
  let component: MovielistNavbarComponent;
  let fixture: ComponentFixture<MovielistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
