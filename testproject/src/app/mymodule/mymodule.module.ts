import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';
import { FeatureMerlinComponent } from './feature-merlin/feature-merlin.component';



@NgModule({
  declarations: [FeatureRominaComponent, FeatureHenningComponent, FeatureMerlinComponent],
  imports: [
    CommonModule
  ]
})
export class MymoduleModule { }
