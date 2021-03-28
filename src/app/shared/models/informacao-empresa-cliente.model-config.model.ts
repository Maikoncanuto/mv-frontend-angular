import {EmpresaCliente} from './empresa-cliente.model';

export interface InformacaoEmpresaClienteConfig {
  nomeBotaoAmbiente?: string;
  nomeAtividades?: string;
  nomeAlteracaoSenha?: string;
  tituloFraseAlteracaoSenha?: string;
  empresaCliente?: EmpresaCliente;
}
