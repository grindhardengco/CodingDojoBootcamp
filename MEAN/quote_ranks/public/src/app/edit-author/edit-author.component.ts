import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }
  
  author: any;

  ngOnInit() {
    this._route.params.subscribe((params)=>{
      this.fetchAuthor(params.id)
    })
  }
  
  fetchAuthor(id){
    this._httpService.fetchAuthor(id).subscribe(data=>{
      this.author = data
    })
  }

  updateAuthor(){
    this._route.params.subscribe((params)=>{
      this._httpService.updateAuthor(params.id, this.author).subscribe(data=>{
        this._router.navigate(['/'])
      })
    })
  }
}
