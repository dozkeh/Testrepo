import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';



@NgModule({
  declarations: [FeatureRominaComponent, FeatureHenningComponent],
  imports: [
    CommonModule
  ]
})
export class MymoduleModule { }
