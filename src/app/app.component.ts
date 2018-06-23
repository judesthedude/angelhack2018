import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  latitude: number = 43.6532;
  longitude: number = -79.3832;

  constructor(
    private cService:ConfigService
  ){
    
  }
  ngOnInit(){
    this.testMethod();
  }

  testMethod(){
    console.log(this.cService.getConfig('test'));
  }

  onClickCoord(e) {
    console.log(e);
  }
}
