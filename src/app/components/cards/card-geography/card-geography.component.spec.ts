import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeographyComponent } from './card-geography.component';

describe('CardGeographyComponent', () => {
  let component: CardGeographyComponent;
  let fixture: ComponentFixture<CardGeographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGeographyComponent]
    });
    fixture = TestBed.createComponent(CardGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
