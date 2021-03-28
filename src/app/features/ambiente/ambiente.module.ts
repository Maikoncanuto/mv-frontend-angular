import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AmbienteRoutingModule} from './ambiente-routing.module';
import {AmbienteListComponent} from './components/ambiente-list/ambiente-list.component';
import {AmbienteCreateComponent} from './components/ambiente-create/ambiente-create.component';
import {AmbienteUpdateComponent} from './components/ambiente-update/ambiente-update.component';
import {AmbienteDeleteComponent} from './components/ambiente-delete/ambiente-delete.component';
import {AmbienteDeleteContainerComponent} from './containers/ambiente-delete-container/ambiente-delete-container.component';
import {AmbienteListContainerComponent} from './containers/ambiente-list-container/ambiente-list-container.component';
import {AmbienteUpdateContainerComponent} from './containers/ambiente-update-container/ambiente-update-container.component';
import {AmbienteCreateContainerComponent} from './containers/ambiente-create-container/ambiente-create-container.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {AmbienteTableItemComponent} from './components/ambiente-table-item/ambiente-table-item.component';
import {AmbienteInformacaoEmpresaClienteComponent} from './components/ambiente-informacao-empresa-cliente/ambiente-informacao-empresa-cliente.component';
import {AmbienteCardInstalacaoComponent} from './components/ambiente-card-instalacao/ambiente-card-instalacao.component';


@NgModule({
  declarations: [
    AmbienteListComponent,
    AmbienteCreateComponent,
    AmbienteUpdateComponent,
    AmbienteDeleteComponent,
    AmbienteDeleteContainerComponent,
    AmbienteListContainerComponent,
    AmbienteUpdateContainerComponent,
    AmbienteCreateContainerComponent,
    AmbienteTableItemComponent,
    AmbienteInformacaoEmpresaClienteComponent,
    AmbienteCardInstalacaoComponent,
  ],
  imports: [
    CommonModule,
    AmbienteRoutingModule,
    FlexLayoutModule,
    FlexModule,
    FontAwesomeModule,
    MatIconModule
  ]
})
export class AmbienteModule {
}
