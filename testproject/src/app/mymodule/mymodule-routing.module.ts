import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureMerlinComponent } from './feature-merlin/feature-merlin.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';
import { FeatureJanComponent } from './feature-jan/feature-jan.component';

const routes: Routes =[
  { path: 'henning', component: FeatureHenningComponent },
  { path: 'merlin', component: FeatureMerlinComponent },
  { path: 'jan', component: FeatureJanComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MymoduleRoutingModule { }
