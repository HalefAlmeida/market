import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './features/administrator/administrator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    //Rota padrão ao entrar na aplicação
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
