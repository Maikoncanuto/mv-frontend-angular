import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemDownload} from '../../../../shared/models/item-download.model';
import {InformacaoEmpresaClienteConfig} from '../../../../shared/models/informacao-empresa-cliente.model-config.model';


@Component({
  selector: 'mv-ambiente-list',
  templateUrl: './ambiente-list.component.html',
  styleUrls: ['./ambiente-list.component.scss']
})
export class AmbienteListComponent implements OnInit {

  @Input() itensDownloads: ItemDownload[] | undefined;
  @Input() informacaoEmpresaClienteConfig: InformacaoEmpresaClienteConfig | undefined;

  @Output() onClickItemDownload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickInformacaoEmpresaClienteAtividades: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickInformacaoEmpresaClienteAlteracaoSenha: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickInformacaoEmpresaClienteConfigurarAmbiente: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickItemDownload(itemDownload: ItemDownload): void {
    this.onClickItemDownload.emit(itemDownload);
  }

  clickInformacaoEmpresaClienteAtividades(): void {
    this.onClickInformacaoEmpresaClienteAtividades.emit();
  }

  clickInformacaoEmpresaClienteAlteracaoSenha(): void {
    this.onClickInformacaoEmpresaClienteAlteracaoSenha.emit();
  }

  clickInformacaoEmpresaClienteConfigurarAmbiente(): void {
    this.onClickInformacaoEmpresaClienteConfigurarAmbiente.emit();
  }

}
