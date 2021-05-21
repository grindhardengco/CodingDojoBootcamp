import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTask: any;
  taskList: Array<{title: string, description: string}>= [];
  editTask: any;

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.newTask = {title: "", description: ""};
    this.editTask = {title: "", description: ""};
    this.showAllTasks();
  }

  create(){
    this._httpService.create(this.newTask).subscribe(data=>{
      this.newTask = {title: "", description: ""}
      this.showAllTasks()
    })
  }

  showAllTasks(){
    this._httpService.getAllTasks().subscribe(data=>{
      this.taskList = data;
    })
  }

  destroy(id: string){
    this._httpService.destroy(id).subscribe(data=>{
      this.showAllTasks()
    })
  }

  edit(id: string){
    this._httpService.edit(id).subscribe(data=>{
      this.editTask = data
    })
  }

  processEdit(id: string){
    // console.log("pre-process edit data: ",this.editTask)
    this._httpService.processEdit(id, this.editTask).subscribe(data=>{
      this.editTask = {}
      this.showAllTasks()
    })
  }
}
