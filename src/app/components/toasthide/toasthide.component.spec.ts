import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasthideComponent } from './toasthide.component';

describe('ToasthideComponent', () => {
  let component: ToasthideComponent;
  let fixture: ComponentFixture<ToasthideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasthideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasthideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
