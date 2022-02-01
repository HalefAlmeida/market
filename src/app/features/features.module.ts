import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator/administrator.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [AdministratorComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [AdministratorComponent],
})
export class FeaturesModule {}
