import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ItemDownload} from '../../../../shared/models/item-download.model';
import {InformacaoEmpresaClienteConfig} from '../../../../shared/models/informacao-empresa-cliente.model-config.model';

@Component({
  selector: 'mv-ambiente-list-container',
  templateUrl: './ambiente-list-container.component.html',
  styleUrls: ['./ambiente-list-container.component.scss']
})
export class AmbienteListContainerComponent implements OnInit {

  $downloads: Observable<any> | undefined;
  $informacaoEmpresaClienteConfigModel: Observable<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.$downloads = this.findAllDownloads();
    this.$informacaoEmpresaClienteConfigModel = this.findInformacaoEmpresaCliente();
  }

  findAllDownloads(): Observable<ItemDownload[]> {
    const downloads: ItemDownload[] = [
      {id: 1, nome: 'Aplicativo 1', status: 'Atualizar'},
      {id: 2, nome: 'Aplicativo 2', status: 'Instalado'},
      {id: 3, nome: 'Aplicativo 3', status: 'Pronto'},
      {id: 4, nome: 'Aplicativo 4', status: 'Atualizar'},
      {id: 5, nome: 'Aplicativo 5', status: 'Download'},
      {id: 6, nome: 'Aplicativo 6', status: 'Atualizar'},
    ];

    return of(downloads);
  }

  findInformacaoEmpresaCliente(): Observable<InformacaoEmpresaClienteConfig> {
    const informacao: InformacaoEmpresaClienteConfig = {
      nomeBotaoAmbiente: 'Configurar Ambiente',
      tituloFraseAlteracaoSenha: 'Última alteração de senha há 6 meses',
      nomeAlteracaoSenha: 'Ver alterações',
      nomeAtividades: 'Ver atividades',
      empresaCliente: {
        email: 'pessoa.sus@datasus.gov.br',
        nome: 'Empresa de Saúde',
        id: 1
      }
    };

    return of(informacao);
  }

  clickItemTableDownload(itemDownload: ItemDownload): void {
    console.log(`Função clicada dentro da tabela para cada item, item: ${itemDownload.nome}`);
  }

  clickInformacaoEmpresaClienteAlteracaoSenha(): void {
    console.log('Alteracao de senha');
  }

  clickInformacaoEmpresaClienteAtividades(): void {
    console.log('ultimas atividades');
  }

  clickInformacaoEmpresaClienteConfigurarAmbiente(): void {
    console.log('configurar ambiente');
  }

}
