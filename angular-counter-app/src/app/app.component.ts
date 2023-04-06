import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public counterService: CounterService, private httpClient: HttpClient ) {
    this.httpClient.get('www.myApis.com/users').subscribe(response => {
      console.log(response)
    })
  }
}
