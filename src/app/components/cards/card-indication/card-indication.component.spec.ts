import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndicationComponent } from './card-indication.component';

describe('CardIndicationComponent', () => {
  let component: CardIndicationComponent;
  let fixture: ComponentFixture<CardIndicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIndicationComponent]
    });
    fixture = TestBed.createComponent(CardIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
