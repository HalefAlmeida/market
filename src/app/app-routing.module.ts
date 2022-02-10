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
    //Rota para o component Home
    path: 'home',
    component: HomeComponent,
  },
  {
    //Rota para o componente de administração da página
    path: 'admin',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
  // { //TODO: Implementar blog da autora
  //   path: 'blog',
  //   // loadChildren: () =>
  //   //   import('./features/features.module').then((m) => m.FeaturesModule),
  // },
  // { //TODO: Implementar sobre a autora
  //   path: 'about',
  //   // loadChildren: () =>
  //   //   import('./features/features.module').then((m) => m.FeaturesModule),
  // },
  // { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
