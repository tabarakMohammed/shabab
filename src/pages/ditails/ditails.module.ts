import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DitailsPage } from './ditails';

@NgModule({
  declarations: [
    DitailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DitailsPage),
  ],
})
export class DitailsPageModule {}
