import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsInfoComponent } from './proyects-info.component';

describe('ProyectsInfoComponent', () => {
  let component: ProyectsInfoComponent;
  let fixture: ComponentFixture<ProyectsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
