import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { CoreModule} from './core.module';
import { AppComponent } from './app.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { ViewCharacterApiComponent } from './view-character-api/view-character-api.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountComponent } from './account/account.component';
import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

// TODO https://coursetro.com/posts/code/32/Create-a-Full-Angular-Authentication-System-with-Firebase
//create login page

export const firebaseConfig = {
    apiKey: "AIzaSyCVIfDAkoPBMvre2kdwiUtjshB11NKJFmg",
    authDomain: "ng2-swapi.firebaseapp.com",
    databaseURL: "https://ng2-swapi.firebaseio.com",
    storageBucket: "ng2-swapi.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
    WelcomeComponent,
    AccountComponent,
    ViewCharacterApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome',  component: WelcomeComponent },
    {
     path: 'add-character',
     component: AddCharacterComponent 
    },
    {
      path: 'account',
      component: AccountComponent
    },
        {
      path: 'view-api',
      component: ViewCharacterApiComponent
    }
    ]),
     AngularFireModule.initializeApp(firebaseConfig)

    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
