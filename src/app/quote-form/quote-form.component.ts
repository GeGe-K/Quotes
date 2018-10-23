import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","",new Date(), 0, 0)
  @Output() addQuote = new EventEmitter<Quote>();

    SubmitQuote(){
      if (this.newQuote.name.length === 0 || this.newQuote.author.length === 0 || this.newQuote.publisher.length === 0) {
        alert("Fill all the fields")
      } else {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new Quote("","","",new Date(2018,9,22),0,0)
      }

    }

  constructor() { }

  ngOnInit() {
  }

}
