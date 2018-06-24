import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
import { Disaster } from './api/rbody.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  latitude: number = 43.6532;
  longitude: number = -79.3832;
  searchString: string;
  disasterList:Disaster[];
  

  constructor(
    private api: ApiService
  ){

  }

  ngOnInit() {
    this.getDisaster("sada")
  }

  getDisaster(typeName: string){
    let tName="Fire Insect Infestation";
    let fields=["type.name"];
    this.api.getDisastersByType(tName, "disasters", fields)
    .then(resp =>
    {
      resp['data'].forEach(element => {
        let d = new Disaster();
        d.id=element.id;
        d.longitude=element['fields']['primary_country']['location']['lat']
        d.latitute=element['fields']['primary_country']['location']['lon']
        d.title=element['fields']['name']
        console.log(element);
      });
      let d = new Disaster();
      console.log(resp['data'])
    })
    .catch(resp => {

    });
  }

  onClickCoord(e) {
    console.log(e);
  }
}
