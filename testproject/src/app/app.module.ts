import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymoduleModule } from './mymodule/mymodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MymoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
