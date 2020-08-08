import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProyectosComponent } from './app-proyectos.component';

describe('AppProyectosComponent', () => {
  let component: AppProyectosComponent;
  let fixture: ComponentFixture<AppProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
