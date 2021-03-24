import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbienteRoutingModule } from './ambiente-routing.module';
import { AmbienteListComponent } from './components/ambiente-list/ambiente-list.component';
import { AmbienteCreateComponent } from './components/ambiente-create/ambiente-create.component';
import { AmbienteUpdateComponent } from './components/ambiente-update/ambiente-update.component';
import { AmbienteDeleteComponent } from './components/ambiente-delete/ambiente-delete.component';
import { AmbienteDeleteContainerComponent } from './containers/ambiente-delete-container/ambiente-delete-container.component';
import { AmbienteListContainerComponent } from './containers/ambiente-list-container/ambiente-list-container.component';
import { AmbienteUpdateContainerComponent } from './containers/ambiente-update-container/ambiente-update-container.component';
import { AmbienteCreateContainerComponent } from './containers/ambiente-create-container/ambiente-create-container.component';


@NgModule({
  declarations: [
    AmbienteListComponent, 
    AmbienteCreateComponent, 
    AmbienteUpdateComponent, 
    AmbienteDeleteComponent, 
    AmbienteDeleteContainerComponent, 
    AmbienteListContainerComponent, 
    AmbienteUpdateContainerComponent, 
    AmbienteCreateContainerComponent
  ],
  imports: [
    CommonModule,
    AmbienteRoutingModule
  ]
})
export class AmbienteModule { }
