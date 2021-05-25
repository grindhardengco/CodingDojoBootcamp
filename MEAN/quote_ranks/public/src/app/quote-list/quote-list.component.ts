import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quoteList: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params)=>{
      this.listQuotes(params.id)
    })
  }

  listQuotes(id){
    this._httpService.fetchAuthor(id).subscribe(data=>{
      this.quoteList = data
    })
  }

  updateVote(quote, val){
    this._httpService.updateVote(this.quoteList._id, quote, val).subscribe(data=>{
      this.listQuotes(this.quoteList._id)
    })
  }

  deleteQuote(quoteId){
    this._httpService.deleteQuote(this.quoteList._id, quoteId).subscribe(data=>{
      this.listQuotes(this.quoteList._id)
    })
  }

}
