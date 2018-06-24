import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYG9d8fas1qkl6LQv3MvYiYVtUCLXah2Q'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
