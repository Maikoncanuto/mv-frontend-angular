import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteListContainerComponent } from './ambiente-list-container.component';

describe('AmbienteListContainerComponent', () => {
  let component: AmbienteListContainerComponent;
  let fixture: ComponentFixture<AmbienteListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
