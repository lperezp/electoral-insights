import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonDetailComponent } from './card-person-detail.component';

describe('CardPersonDetailComponent', () => {
  let component: CardPersonDetailComponent;
  let fixture: ComponentFixture<CardPersonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonDetailComponent]
    });
    fixture = TestBed.createComponent(CardPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
