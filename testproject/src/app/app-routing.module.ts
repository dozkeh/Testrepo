import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'henning', pathMatch: 'full'}
];
//{scrollPositionRestauration = 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
