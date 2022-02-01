import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator/administrator.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AdministratorComponent, CategoriesComponent, ProductsComponent],
  imports: [CommonModule, FeaturesRoutingModule, MaterialModule],
  exports: [AdministratorComponent],
})
export class FeaturesModule {}
