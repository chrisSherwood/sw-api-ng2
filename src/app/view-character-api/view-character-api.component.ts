import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';


@Component({
  selector: 'app-view-character-api',
  templateUrl: './view-character-api.component.html',
  styleUrls: ['./view-character-api.component.css']
})
export class ViewCharacterApiComponent implements OnInit {

  public sw_characters:any[];


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
