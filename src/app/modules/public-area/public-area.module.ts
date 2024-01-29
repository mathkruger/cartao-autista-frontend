import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAreaComponent } from './public-area.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PublicAreaComponent
      }
    ])
  ],
  declarations: [PublicAreaComponent]
})
export class PublicAreaModule { }
