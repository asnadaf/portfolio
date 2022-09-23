import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodevianComponent } from './codevian.component';

describe('CodevianComponent', () => {
  let component: CodevianComponent;
  let fixture: ComponentFixture<CodevianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodevianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodevianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
