import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: 'public';
  //declare objects/var-type here
  newCake: any;
  cakeList: {baker: string, url: string}[] = [];
  newRating: any;
  rateList: {rating: number, comment: string}[] = [];

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    this.newCake = {baker:"",url:""}
    this.showAll()
    this.newRating = {rating: null, comment:""}
  }

  create(){
    this._httpService.create(this.newCake).subscribe(data=>{
      this.newCake = {baker:"",url:""}
      this.showAll()
    })
  }

  showAll(){
    this._httpService.showAll().subscribe(data=>{
      this.cakeList = data
    })
  }

  rate(id){
    this._httpService.rate(id, this.newRating).subscribe(data=>{
      this.newRating = {rating: null, comment: ""}
    })
  }

  details(id){
    this._httpService.details(id).subscribe(data=>{
      this.rateList = data;
    })
  }
}