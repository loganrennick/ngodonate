import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypeManagementComponent } from './donation-type-management.component';

describe('DonationTypeManagementComponent', () => {
  let component: DonationTypeManagementComponent;
  let fixture: ComponentFixture<DonationTypeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationTypeManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
