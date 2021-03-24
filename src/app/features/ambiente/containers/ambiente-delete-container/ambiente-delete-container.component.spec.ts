import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteDeleteContainerComponent } from './ambiente-delete-container.component';

describe('AmbienteDeleteContainerComponent', () => {
  let component: AmbienteDeleteContainerComponent;
  let fixture: ComponentFixture<AmbienteDeleteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteDeleteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteDeleteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
