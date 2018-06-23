import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYG9d8fas1qkl6LQv3MvYiYVtUCLXah2Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
