import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  constructor(private _http: HttpClient) { }
  
  create(newCake){
    return this._http.post('/create',newCake)  
  }
  
  showAll(){
    return this._http.get<{baker:string, url:string}[]>('/list')
  }

  rate(id, newRating){
    return this._http.post('/rate/'+id,newRating)
  }

  details(id){
    return this._http.get<{rating: number, comment: string}[]>('/details/'+id)
  }
}
