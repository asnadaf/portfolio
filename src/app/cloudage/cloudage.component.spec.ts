import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudageComponent } from './cloudage.component';

describe('CloudageComponent', () => {
  let component: CloudageComponent;
  let fixture: ComponentFixture<CloudageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
