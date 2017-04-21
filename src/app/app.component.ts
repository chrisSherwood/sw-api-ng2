import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/';
import { HttpService } from './http.service';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public sw_characters:any[];
  public title = 'API-D2: Star Wars API Creator';

  constructor() {  }

  ngOnInit() {
  }




}

