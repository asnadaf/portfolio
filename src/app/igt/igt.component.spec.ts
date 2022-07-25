import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgtComponent } from './igt.component';

describe('IgtComponent', () => {
  let component: IgtComponent;
  let fixture: ComponentFixture<IgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
