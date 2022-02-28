import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAppointmentsComponent } from './upload-appointments.component';

describe('UploadAppointmentsComponent', () => {
  let component: UploadAppointmentsComponent;
  let fixture: ComponentFixture<UploadAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
