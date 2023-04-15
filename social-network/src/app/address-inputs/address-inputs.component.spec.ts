import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputsComponent } from './address-inputs.component';

describe('AddressInputsComponent', () => {
  let component: AddressInputsComponent;
  let fixture: ComponentFixture<AddressInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
