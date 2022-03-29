import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeftSideDataComponent } from './app-left-side-data.component';

describe('AppLeftSideDataComponent', () => {
  let component: AppLeftSideDataComponent;
  let fixture: ComponentFixture<AppLeftSideDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLeftSideDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLeftSideDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
