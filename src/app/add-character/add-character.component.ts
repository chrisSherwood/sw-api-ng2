import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/';
import { HttpService } from '../http.service';


@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  providers: [HttpService]
})
export class AddCharacterComponent implements OnInit {

  private fileReader: FileReader;
  private base64Encoded: string;
  private base64Image:any;

  constructor(private httpService: HttpService) {  }

  ngOnInit() {

  }

submitSwData(characterName :string, allegiance: string, avatar) {

     this.httpService.sendData({characterName: characterName, allegiance: allegiance})
     .subscribe(data => console.log(data),
                err  => console.error(err),
                ()   => alert('sucess!'));

}



}
