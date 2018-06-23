import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  latitude: number = 43.6532;
  longitude: number = -79.3832;

  onClickCoord(e) {
    console.log(e);
  }
}
