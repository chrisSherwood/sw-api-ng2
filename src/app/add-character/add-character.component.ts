import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { Http, Response, RequestOptions } from "@angular/http";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  providers: [HttpService]
})
export class AddCharacterComponent implements OnInit {

  public fileList: FileList;
  public formData:FormData;
  public formSubmitted = false;
  public image:any;
  public allegianceList = [ 'Jedi', 
                        'Sith', 
                        'Knights of Ren',
                        'First Order',
                        'Empire',
                        'Rebels',
                        'Resistance',
                        'Bounty Hunter'
                        ];
  public appearanceList = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII' ]; 

  private base64Encoded: string;
  private baseUri:string = 'https://firebasestorage.googleapis.com/v0/b/ng2-swapi.appspot.com/o/';


  constructor(private httpService: HttpService, public af:AngularFire, private http: Http, private router: Router) {

    
    }

  ngOnInit() {

  }

logout() {
  this.af.auth.logout();
  document.location.href = '/welcome';
}

characterAvatarPicker(allegiance) {
    switch (allegiance) {
      case 'Jedi':
        return this.baseUri + 'jedi.png?alt=media&token=7e4df434-0458-4428-ae2e-37d1e91bf1e4';
      case 'Knights of Ren':
       return this.baseUri + 'knightsOfRen.png?alt=media&token=b602bde1-39af-4f60-8bff-42784c1c862f';
      case 'Sith':
       return this.baseUri + 'knightsOfRen.png?alt=media&token=b602bde1-39af-4f60-8bff-42784c1c862f';
      case 'Bounty Hunter':
       return this.baseUri + 'bountyHunter.png?alt=media&token=0376429e-e07f-49e5-86c7-71e65a58bde8';
       case 'First Order':
      return this.baseUri + 'firstOrder.png?alt=media&token=d62ba5ca-140f-4367-a242-73b859ff49ad';
       case 'Rebels':
      return this.baseUri + 'rebel.png?alt=media&token=80e6c72f-f0bd-4d24-ab57-12d2ef790643';
        case 'Resistance':
      return 'resistance.png?alt=media&token=9c436497-9a37-4ed0-8b1d-8392ae3d260c';
        case 'Empire':
      return 'empire.png?alt=media&token=5f0f6dd2-5973-47b1-bb72-3a8111aa0339';
        case 'Smuggler':
      return 'smuggler.png?alt=media&token=b42f9c59-9495-4d91-b20a-357265cd4526';
      default:
       return this.baseUri + 'droid.png?alt=media&token=dfffa657-57d5-4823-b2fc-903f02acdb65'
    }
}


submitSwData(characterName :string, allegiance: string, characterInformation, characterQuote:string, firstAppearance:string) {

     this.characterAvatarPicker(allegiance);

     this.httpService.sendData({
       characterName: characterName, 
       allegiance: allegiance, 
       characterInformation: characterInformation, 
       imageUri: this.characterAvatarPicker(allegiance),
       firstAppearance: firstAppearance,
       characterQuote:characterQuote  })
     .subscribe(data => console.log(data),
                err  => console.error(err),
                ()   => this.formSubmitted = true);

}



}
