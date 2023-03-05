import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SScreenPageRoutingModule } from './sscreen-routing.module';

import { SScreenPage } from './sscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SScreenPageRoutingModule
  ],
  declarations: [SScreenPage]
})
export class SScreenPageModule {}
