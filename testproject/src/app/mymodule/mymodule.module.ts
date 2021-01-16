import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';
import { FeatureMerlinComponent } from './feature-merlin/feature-merlin.component';
import { FeatureJanComponent } from './feature-jan/feature-jan.component';
import { MymoduleRoutingModule } from './mymodule-routing.module';



@NgModule({
  declarations: [FeatureRominaComponent, FeatureHenningComponent, FeatureMerlinComponent, FeatureJanComponent],
  imports: [
    CommonModule,
    MymoduleRoutingModule
  ]
})
export class MymoduleModule { }
