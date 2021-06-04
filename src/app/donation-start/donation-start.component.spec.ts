import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationStartComponent } from './donation-start.component';

describe('DonationStartComponent', () => {
  let component: DonationStartComponent;
  let fixture: ComponentFixture<DonationStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
