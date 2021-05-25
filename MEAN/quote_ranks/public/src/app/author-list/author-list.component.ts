import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authorList: {name: string}[] = []

  
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.listAuthors()
  }

  listAuthors(){
    this._httpService.listAuthors().subscribe(data=>{
      this.authorList = data
    })
  }
}
