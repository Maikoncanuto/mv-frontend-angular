import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmpresaCliente} from '../../../../shared/models/empresa-cliente.model';
import {InformacaoEmpresaClienteConfig} from "../../../../shared/models/informacao-empresa-cliente.model-config.model";

@Component({
  selector: 'mv-ambiente-informacao-empresa-cliente',
  templateUrl: './ambiente-informacao-empresa-cliente.component.html',
  styleUrls: ['./ambiente-informacao-empresa-cliente.component.scss']
})
export class AmbienteInformacaoEmpresaClienteComponent implements OnInit {

  @Input() informacaoEmpresClienteConfig: InformacaoEmpresaClienteConfig | undefined;

  @Output() onClickAtividades: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickAlteracaoSenha: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickConfigurarAmbiente: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickConfigurarAmbiente(): void {
    this.onClickConfigurarAmbiente.emit();
  }

  clickAtividades(): void {
    this.onClickAtividades.emit();
  }

  clickAlteracaoSenha(): void {
    this.onClickAlteracaoSenha.emit();
  }

}
