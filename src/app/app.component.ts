import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

import { MnFullpageService } from 'ngx-fullpage';
import { Disaster, Charity, Report } from './api/rbody.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSideBar: boolean = false;
  searchString: string;
  disasterList: Disaster[] = [];
  disaster: Disaster;
  longitude: string;
  latitude: string;
  charityList:Charity[]=[];
  reportList: Report[]=[];
  selectedDisaster:string="43539"

  constructor(public fullpageService: MnFullpageService,
    private api: ApiService) {
  }

  getDisaster(typeName: string){
    let tName=typeName;
    let fields=["type.name"];
    this.api.getDisastersByType(tName, "disasters", fields)
    .then(resp =>
    {
      resp['data'].forEach(element => {
        let d = new Disaster();
        d.id=element.id;
        d.longitude=element['fields']['primary_country']['location']['lat']
        d.latitude=element['fields']['primary_country']['location']['lon']
        d.title=element['fields']['name']
        this.disasterList.push(d);
      });
      this.disaster = this.disasterList[0];
      this.longitude = this.disaster.longitude;
      this.latitude = this.disaster.latitude;
    })
    .catch(resp => {
    });
  }

  getDisasterInfo(disaster: Disaster) {
    console.log(disaster);
    this.title = disaster.title;
  }

  searchDisasters(e) {
    this.fullpageService.moveSectionDown()
    this.getDisaster(e.target.value);
    this.getCharity(e.target.value);
  }

  getReports(){
    let tName="Fire Insect Infestation";
    let fields=["disaster.id"];
    this.api.getDisastersByType(this.selectedDisaster,"reports", fields).then(
      resp => {
        resp.data.forEach(element => {
          let r = new Report();
          r.title=element['fields']['title'];
          r.body= String (element['fields']['body']).substr(0,50);
          r.origin=element['fields']['origin'];
          this.reportList.push(r);
          console.log(r);
          
        });
      }
    )
  }
  getCharity(typeName:string){
    let tName=typeName;
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
}
