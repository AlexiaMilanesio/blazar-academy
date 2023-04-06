import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberContainerComponent } from './number-container.component';

describe('NumberContainerComponent', () => {
  let component: NumberContainerComponent;
  let fixture: ComponentFixture<NumberContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
