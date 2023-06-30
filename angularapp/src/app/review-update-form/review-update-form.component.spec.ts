import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUpdateFormComponent } from './review-update-form.component';

describe('ReviewUpdateFormComponent', () => {
  let component: ReviewUpdateFormComponent;
  let fixture: ComponentFixture<ReviewUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
