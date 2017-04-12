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

@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
    ViewCharacterApiComponent,
    WelcomeComponent,
    AccountComponent
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
      path: 'view-api',
      component: ViewCharacterApiComponent
    },
    {
      path: 'account',
      component: AccountComponent
    }
    ])
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
