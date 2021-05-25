import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  addAuthor(newAuthor){
    return this._http.post('/addAuthor',newAuthor)  
  }
  
  listAuthors(){
    return this._http.get<{name:string}[]>('/listAuthors')
  }

  fetchAuthor(id){
    return this._http.get('/fetchAuthor/'+id)
  }

  updateAuthor(id, author){
    console.log("updateAuthor received id & author: ",id," ,", author)
    return this._http.post('/updateAuthor/'+id, author)
  }


  // rate(id, newRating){
  //   return this._http.post('/rate/'+id,newRating)
  // }

  // details(id){
  //   return this._http.get<{rating: number, comment: string}[]>('/details/'+id)
  // }
}
