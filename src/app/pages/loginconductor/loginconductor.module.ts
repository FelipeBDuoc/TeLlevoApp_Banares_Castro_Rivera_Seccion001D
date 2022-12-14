import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginconductorPageRoutingModule } from './loginconductor-routing.module';

import { LoginconductorPage } from './loginconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginconductorPageRoutingModule
  ],
  declarations: [LoginconductorPage]
})
export class LoginconductorPageModule {}
