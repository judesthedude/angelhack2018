import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ConfigService } from '../config/config.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYG9d8fas1qkl6LQv3MvYiYVtUCLXah2Q'
    })
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
