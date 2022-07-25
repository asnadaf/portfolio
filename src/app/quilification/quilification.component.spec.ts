import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilificationComponent } from './quilification.component';

describe('QuilificationComponent', () => {
  let component: QuilificationComponent;
  let fixture: ComponentFixture<QuilificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuilificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
