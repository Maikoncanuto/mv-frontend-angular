import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteCreateContainerComponent } from './ambiente-create-container.component';

describe('AmbienteCreateContainerComponent', () => {
  let component: AmbienteCreateContainerComponent;
  let fixture: ComponentFixture<AmbienteCreateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteCreateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
