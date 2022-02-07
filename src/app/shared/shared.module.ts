import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, BackButtonComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    MaterialModule,
    ToolbarComponent,
    FooterComponent,
    BackButtonComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
