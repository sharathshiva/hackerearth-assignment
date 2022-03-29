import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeftSideHeaderComponent } from './app-left-side-header.component';

describe('AppLeftSideHeaderComponent', () => {
  let component: AppLeftSideHeaderComponent;
  let fixture: ComponentFixture<AppLeftSideHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLeftSideHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLeftSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
