import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // newQuote: any

  constructor(private _httpService: HttpService){};

  ngOnInit(){
    // this.newQuote = {quote:""}
  }


  // rate(id){
  //   this._httpService.rate(id, this.newRating).subscribe(data=>{
  //     this.newRating = {rating: null, comment: ""}
  //   })
  // }

  // details(id){
  //   this._httpService.details(id).subscribe(data=>{
  //     this.rateList = data;
  //   })
  //}
}
