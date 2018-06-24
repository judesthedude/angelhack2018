import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Param, Query } from './rbody.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pVal = new Param();

  constructor(private http: HttpClient) {
  }
//https://api.reliefweb.int/v1/reports?appname=apidoc&limit=1&filter[field]=date.created&filter[value][from]=2018-06-21T00:00:00%2B00:00&filter[field]=disaster.name&filter[value]=hurricane&profile=full
//https://data.orghunter.com/v1/charitysearch?user_key=4434856c2a554bbf5c6ffdac9fa421b8&city=Toronto&searchTerm=cancer  
getDisasters() {
  let postUrl = "https://api.reliefweb.int/v1/disasters?appname=apidoc";
  this.pVal.query = new Query();
  this.pVal.query.fields=["description", "country","country.name"];
  this.pVal.query.operator="OR";
  this.pVal.query.value="earthquake Salvador en";
  this.pVal.preset="latest";
  this.http.post(postUrl,this.pVal, httpOptions).toPromise()
  .then(resp => console.log(resp['data'][3]['fields']['name']));

    // this.http
    //   .get("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=1&filter[field]=date.created&filter[value][from]=2018-06-21T00:00:00%2B00:00&filter[field]=disaster.name&filter[value]=hurricane&profile=full", httpOptions)
    //   .toPromise()
    //   .then(resp => console.log(resp['href']))
    //   .catch(resp => console.log(resp));
  }

  getCharity() {
  }
  getCharityHttp() {
    let url="https://api.data.charitynavigator.org/v2/Lists";
    let auth="?app_id=6d659581&app_key=a49581671d27edbeaad2a3bc60b3cd3a";
    this.http.get("assets/list.json").subscribe(resp => console.log(resp));
  }

}
