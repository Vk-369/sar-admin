import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInputScreenComponent } from './main-input-screen.component';

describe('MainInputScreenComponent', () => {
  let component: MainInputScreenComponent;
  let fixture: ComponentFixture<MainInputScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainInputScreenComponent]
    });
    fixture = TestBed.createComponent(MainInputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
