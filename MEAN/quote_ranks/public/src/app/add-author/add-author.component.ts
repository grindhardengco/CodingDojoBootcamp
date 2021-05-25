import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  newAuthor: any

  ngOnInit() {
        this.newAuthor = {name:""}
  }

    addAuthor(){
    this._httpService.addAuthor(this.newAuthor).subscribe(data=>{
      this.newAuthor = {name:""}
      this._router.navigate(['/'])
    })
  }


}
