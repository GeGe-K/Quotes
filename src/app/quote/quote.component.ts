import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote"
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote('Live one day at a time emphasizing ethics rather than rules.', 'Wayne Dyre','Gloria',new Date(),0,0),
    new Quote('Obstacles are those frightful things you see when you take your eyes off your goal.','Theodore Rossevelt','Jane',new Date(),0,0)
  ]
  addNewQuote(quote){
    let quotelength = this.quotes.length;
    quote.id=quotelength+1;
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(i) {
    this.quotes.splice(i,1)
  }
  downVote(obj,i) {
    this.quotes[i].downvote++;
  }
  upVote(obj,i){
    this.quotes[i].upvote++;
  }
  constructor() { }

  ngOnInit() {
  }

}
