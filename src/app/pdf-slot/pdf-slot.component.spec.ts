import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSlotComponent } from './pdf-slot.component';

describe('PdfSlotComponent', () => {
  let component: PdfSlotComponent;
  let fixture: ComponentFixture<PdfSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
