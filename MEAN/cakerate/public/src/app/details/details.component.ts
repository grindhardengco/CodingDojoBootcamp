import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() cakeDetail;

  constructor() { }

  ngOnInit() {
  }

  calcAvg(cake){
    let sum = 0
    let count = 0
    for(let rating of cake.ratings){
      if(rating.stars>0){
        sum += rating.stars
        count++
      }
    }
    let avg = 0
    avg = sum / count
    return avg
  }

}
