import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueWrapperComponent } from './vue-wrapper.component';

describe('VueWrapperComponent', () => {
  let component: VueWrapperComponent;
  let fixture: ComponentFixture<VueWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
