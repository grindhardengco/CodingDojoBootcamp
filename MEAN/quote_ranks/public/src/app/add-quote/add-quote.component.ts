import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }
  
  author: any
  newQuote: any
  
  ngOnInit() {
    this._route.params.subscribe((params)=>{
      this.fetchAuthor(params.id)
      this.newQuote = {text: "", vote: 0}
    })
  }

  fetchAuthor(id){
    this._httpService.fetchAuthor(id).subscribe(data=>{
      this.author = data
    })
  }

  addQuote(id){
    this._httpService.addQuote(id, this.newQuote).subscribe(data=>{
      this._router.navigate(['/quote-list/'+id])
    })
  }

}
