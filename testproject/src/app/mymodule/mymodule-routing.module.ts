import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRominaComponent } from './feature-romina/feature-romina.component';
import { FeatureMerlinComponent } from './feature-merlin/feature-merlin.component';
import { FeatureHenningComponent } from './feature-henning/feature-henning.component';

const routes: Routes =[
  { path: 'hening', component: FeatureHenningComponent },
  { path: '**', redirectTo: 'henning' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})


export class MymoduleRoutingModule { }
