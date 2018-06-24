import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  latitude: number = 43.6532;
  longitude: number = -79.3832;

  constructor(
    private api: ApiService
  ){

  }
  showSideBar: boolean = false;

  ngOnInit() {
    console.log("test");
    this.api.getCharity();
  }
  onClickCoord(e) {
    console.log(e);
  }
}
