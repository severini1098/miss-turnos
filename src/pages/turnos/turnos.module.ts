import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurnosPage } from './turnos';

@NgModule({
  declarations: [
    TurnosPage,
  ],
  imports: [
    IonicPageModule.forChild(TurnosPage),
  ],
})
export class TurnosPageModule {}
