import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasksList: Array<{title:string, descr:string, completed:boolean}> = [];

  constructor(private _httpService: HttpService){}
  
  ngOnInit () {
    this.getTasksFromService(); 
  }
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data=>{
      this.tasksList = data
    });
  }
}
