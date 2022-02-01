import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {
  //   //Rota padrão ao entrar na aplicação
  //   path: '',
  //   redirectTo: 'admin',
  //   pathMatch: 'full',
  // },
  {
    path: '',

    children: [
      {
        path: '',
        component: AdministratorComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
