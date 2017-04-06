import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/';
import { HttpService } from './http.service';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public sw_characters:any[];
  public title = 'Star Wars API Maker';

  constructor(private httpService: HttpService) {  }

  ngOnInit() {
      this.getSwCharacterData();
  }


    getSwCharacterData() {
    this.httpService.getCharacterData().subscribe(
      data =>{ 
        const myArray = [];
        for (let key in data){
          myArray.push(data[key]);
        }
        this.sw_characters = myArray; 
        console.log(myArray);
     },
      err => console.error(err),
      () => console.log('done loading sw data' + this.sw_characters)
    );
  }

}

