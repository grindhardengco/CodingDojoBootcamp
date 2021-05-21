import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  create(newTask:{title:string, description:string}){
    return this._http.post('/newTask',newTask)
  }

  getAllTasks(){
    return this._http.get<{title:string, description:string}[]>('/list')
  }

  destroy(id){
    return this._http.get('/destroy/'+id)
  }

  edit(id){
    return this._http.get('/edit/'+id)
  }

  processEdit(id, editTask){
    return this._http.post('/process_edit/'+id, editTask)
  }


}
