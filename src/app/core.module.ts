import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

const firebaseConfig = {
    apiKey: "AIzaSyCVIfDAkoPBMvre2kdwiUtjshB11NKJFmg",
    authDomain: "ng2-swapi.firebaseapp.com",
    databaseURL: "https://ng2-swapi.firebaseio.com",
    storageBucket: "ng2-swapi.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  exports: [
    BrowserModule,
  ]
})
export class CoreModule {}

