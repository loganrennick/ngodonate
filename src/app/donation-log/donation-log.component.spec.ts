import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationLogComponent } from './donation-log.component';

describe('DonationLogComponent', () => {
  let component: DonationLogComponent;
  let fixture: ComponentFixture<DonationLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
