import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvAmbienteCardComponent } from './mv-ambiente-card.component';

describe('MvAmbienteCardComponent', () => {
  let component: MvAmbienteCardComponent;
  let fixture: ComponentFixture<MvAmbienteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvAmbienteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvAmbienteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
