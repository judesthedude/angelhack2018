import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
configUrl = 'https://api.reliefweb.int/v1/reports?appname=apidoc&limit=1&filter[field]=date.created&filter[value][from]=2018-06-21T00:00:00%2B00:00&filter[field]=disaster.name&filter[value]="hurricane"&profile=full';

getConfig(testValue:string) {
  return this.http.get(this.configUrl).subscribe(resp => console.log(resp));
}

  constructor(private http: HttpClient) { }
}