import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { ImageToBase64Component } from './image-to-base64/image-to-base64.component';
import { ViewCharacterApiComponent } from './view-character-api/view-character-api.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
    ImageToBase64Component,
    ViewCharacterApiComponent,
    WelcomeComponent
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
    }
    ])
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
