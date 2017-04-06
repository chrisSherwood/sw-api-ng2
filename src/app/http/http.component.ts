import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/';
import { HttpService } from '.././http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[HttpService]
})
export class HttpComponent implements OnInit {

  public sw_data;

  constructor(private httpService: HttpService) { alert(1); }

  ngOnInit() {
  this.getSwData();
  alert(this.sw_data);
}


    getSwData() {
    this.httpService.getData().subscribe(
      (data:any) => { this.sw_data = data},
      err => console.error(err),
      () => console.log('done loading sw data')
    );
  }

}
