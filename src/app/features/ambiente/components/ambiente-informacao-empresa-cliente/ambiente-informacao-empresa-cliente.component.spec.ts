import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteInformacaoEmpresaClienteComponent } from './ambiente-informacao-empresa-cliente.component';

describe('AmbienteInformacaoEmpresaClienteComponent', () => {
  let component: AmbienteInformacaoEmpresaClienteComponent;
  let fixture: ComponentFixture<AmbienteInformacaoEmpresaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteInformacaoEmpresaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteInformacaoEmpresaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
