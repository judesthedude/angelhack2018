import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { ApiService } from './api/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AgmCoreModule,
    HttpClientModule,
    MnFullpageModule.forRoot()
  ],
  providers: [
    ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
