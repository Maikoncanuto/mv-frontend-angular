import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteUpdateComponent } from './ambiente-update.component';

describe('AmbienteUpdateComponent', () => {
  let component: AmbienteUpdateComponent;
  let fixture: ComponentFixture<AmbienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
