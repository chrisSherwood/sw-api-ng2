import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { ImageToBase64Component } from './image-to-base64/image-to-base64.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    AddCharacterComponent,
    ImageToBase64Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
