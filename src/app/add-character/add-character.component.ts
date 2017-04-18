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
  public image:any;
  public allegianceList = [ 'Jedi', 
                        'Sith', 
                        'Knights of Ren',
                        'First Order',
                        'Empire',
                        'Rebels',
                        'Resistance',
                        'Bounty Hunter',
                        'EverAfterHigh'];
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
        return this.baseUri + 'jedi.png?alt=media&token=8a0b2ab3-57ee-4a4a-8879-95053fa416a1';
      case 'Knights of Ren':
       return this.baseUri + 'knights_of_ren.png?alt=media&token=2117df45-e0e7-4870-a2dc-5e9cd9e6f15b';
      case 'Sith':
       return this.baseUri + 'sith.png?alt=media&token=4d325d05-18a1-4ceb-a6af-c78f6f6b0b20';
      case 'EverAfterHigh':
       return this.baseUri + 'Raven_Queen.jpg?alt=media&token=8b5da5e1-feb8-40c3-af7a-eed513e87212';
      default:
       return this.baseUri + 'empire.png?alt=media&token=1cce9284-fbe5-49e8-99dd-16b7a380488a'
    }
}

allegianceIconPicker(allegiance){
  switch (allegiance) {
    case 'Jedi':
      return ''  
    default:
      break;
  }
}

submitSwData(characterName :string, allegiance: string, characterInformation) {

     this.characterAvatarPicker(allegiance);

     this.httpService.sendData({
       characterName: characterName, 
       allegiance: allegiance, 
       characterInformation: characterInformation, 
       imageUri: this.characterAvatarPicker(allegiance)  })
     .subscribe(data => console.log(data),
                err  => console.error(err),
                ()   => alert('success!'));

}



}
