import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

  private firebaseUri:string = 'https://ng2-swapi.firebaseio.com/';
  private swApiUri:string    = 'https://swapi.co/api/people/';

  constructor(private http: Http) { }

  getData () {
     return this.http.get(this.firebaseUri + 'title.json').map((res:Response) => res.json());
  }

  getCharacterData () {
    return this.http.get(this.firebaseUri + 'data.json').map((res:Response) => res.json());
  }

  sendData (data : any) {
    console.log(data);
    const body = JSON.stringify(data);
    const header = new Headers();
    header.append('Content-Type','application/json');    header.append('Content-Type', 'multipart/form-data');

    
    return this.http.post(this.firebaseUri + 'data.json', body, header)
    .map((data: Response) => data.json());
  }
}