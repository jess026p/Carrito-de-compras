import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComenzarCompraPageRoutingModule } from './comenzar-compra-routing.module';

import { ComenzarCompraPage } from './comenzar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComenzarCompraPageRoutingModule
  ],
  declarations: [ComenzarCompraPage]
})
export class ComenzarCompraPageModule {}
