import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccesoComponent } from './app-acceso.component';

describe('AppAccesoComponent', () => {
  let component: AppAccesoComponent;
  let fixture: ComponentFixture<AppAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
