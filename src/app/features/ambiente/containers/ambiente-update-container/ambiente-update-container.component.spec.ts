import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteUpdateContainerComponent } from './ambiente-update-container.component';

describe('AmbienteUpdateContainerComponent', () => {
  let component: AmbienteUpdateContainerComponent;
  let fixture: ComponentFixture<AmbienteUpdateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteUpdateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
