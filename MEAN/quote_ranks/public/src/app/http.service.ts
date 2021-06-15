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
    return this._http.post('/updateAuthor/'+id, author)
  }

  addQuote(id, quote){
    return this._http.post('/addQuote/'+id, quote)
  }

  updateVote(id, quote, val){
    return this._http.post(`/updateVote/${id}/${val}`, quote)
  }

  deleteQuote(id, quoteId){
    console.log("httpService received params: ",id,quoteId)
    return this._http.get(`/deleteQuote/${id}/${quoteId}`)
  }
}
