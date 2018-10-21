import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote"
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote('Live one day at a tome emphasizing ethics rather than rules', 'Wayne Dyre','Gloria'),
    new Quote('Obstacles are those frightful things you see when you take your eyes off your goal.','Theodore Rossevelt','Jane')
  ]
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
