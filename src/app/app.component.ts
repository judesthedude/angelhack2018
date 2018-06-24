import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
import { Disaster, Charity } from './api/rbody.model';

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
  disasterList:Disaster[]=[];
  charityList:Charity[]=[];
  selectedDisaster:string="43539"
  

  constructor(
    private api: ApiService
  ){

  }

  ngOnInit() {
    this.getDisaster("sada")
    this.getCharity("sad");
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

  getReports(){
    let tName="Fire Insect Infestation";
    let fields=["disaster.id"];
    this.api.getDisastersByType(this.selectedDisaster,"reports", fields).then(
      resp => {
        
      }
    )
  }
  getCharity(typeName:string){
    let tName="Flash flood"
    this.api.getCharity(tName.toLowerCase()).then(
      resp => {
        resp.forEach(element => {
          let c = new Charity();
          c.websiteURL=element['websiteURL'];
          c.tagLine=element['tagLine'];
          c.charityName=element['charityName'];
          c.accountabilityRatingscore=element['currentRating']['accountabilityRating']['score'];
          c.accountabilityRatingrating=element['currentRating']['accountabilityRating']['rating'];
          this.charityList.push(c);
          console.log(c);
        });
        console.log(resp[1])
      }
    ).catch(
      resp => console.log(resp)
    )
  } 
  onClickCoord(e) {
    console.log(e);
  }
}
