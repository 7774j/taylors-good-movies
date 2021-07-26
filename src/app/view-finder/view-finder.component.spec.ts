import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinderComponent } from './view-finder.component';

describe('ViewFinderComponent', () => {
  let component: ViewFinderComponent;
  let fixture: ComponentFixture<ViewFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
