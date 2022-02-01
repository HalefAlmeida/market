import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';

const routes: Routes = [
  // {
  //   //Rota padrão ao entrar na aplicação
  //   path: '',
  //   redirectTo: 'admin',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: AdministratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
