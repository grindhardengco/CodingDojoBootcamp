import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasksList: Array<{title:string, descr:string, completed:boolean}> = [];
  singleTask: any
  //where do I learn about the above declarations of types??  Why is this done here as well as in httpService??

  constructor(private _httpService: HttpService){}
  
  ngOnInit () {
    this.singleTask = {}
  }

  showTaskDetail(id: string){
    this._httpService.getOneTask(id).subscribe(data=>{
      this.singleTask = data
      console.log(this.singleTask)
    })
  }

  showAllTitles(){
    this._httpService.getTasks().subscribe(data=>{
      this.tasksList = data
    });
  }
}
