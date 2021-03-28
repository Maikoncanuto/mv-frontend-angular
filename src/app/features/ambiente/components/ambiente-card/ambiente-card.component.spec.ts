import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AmbienteCardComponent} from './ambiente-card.component';

describe('AmbienteCardComponent', () => {
  let component: AmbienteCardComponent;
  let fixture: ComponentFixture<AmbienteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmbienteCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
