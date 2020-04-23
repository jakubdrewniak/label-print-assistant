import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingBoardComponent } from './printing-board.component';

describe('PrintingBoardComponent', () => {
  let component: PrintingBoardComponent;
  let fixture: ComponentFixture<PrintingBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
