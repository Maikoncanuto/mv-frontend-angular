import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteCardInstalacaoComponent } from './ambiente-card-instalacao.component';

describe('AmbienteCardInstalacaoComponent', () => {
  let component: AmbienteCardInstalacaoComponent;
  let fixture: ComponentFixture<AmbienteCardInstalacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteCardInstalacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteCardInstalacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
