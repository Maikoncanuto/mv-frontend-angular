import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbienteCreateContainerComponent } from './containers/ambiente-create-container/ambiente-create-container.component';
import { AmbienteDeleteContainerComponent } from './containers/ambiente-delete-container/ambiente-delete-container.component';
import { AmbienteListContainerComponent } from './containers/ambiente-list-container/ambiente-list-container.component';
import { AmbienteUpdateContainerComponent } from './containers/ambiente-update-container/ambiente-update-container.component';

const routes: Routes = [
  {
    path: '',
    component: AmbienteListContainerComponent
  },
  {
    path: 'update/:id',
    component: AmbienteUpdateContainerComponent
  },
  {
    path: 'delete/:id',
    component: AmbienteDeleteContainerComponent
  },
  {
    path: 'create',
    component: AmbienteCreateContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbienteRoutingModule { }
