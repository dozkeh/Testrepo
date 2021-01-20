import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';

import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';
import { FeatureMerlinComponent } from './feature-merlin/feature-merlin.component';
import { FeatureJanComponent } from './feature-jan/feature-jan.component';
import { MymoduleRoutingModule } from './mymodule-routing.module';



@NgModule({
  declarations: [FeatureRominaComponent, FeatureHenningComponent, FeatureMerlinComponent, FeatureJanComponent],
  imports: [
    CommonModule,
    MymoduleRoutingModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatTreeModule,
    MatTabsModule

  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatTreeModule,
    MatTabsModule
  ]
})
export class MymoduleModule { }
