import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ComponentsModule } from '../Components/components.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
