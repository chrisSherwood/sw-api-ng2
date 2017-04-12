import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [HttpService]

})
export class WelcomeComponent implements OnInit {

  constructor(private httpService: HttpService) {  }
  
  public sw_characters:any[];

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
