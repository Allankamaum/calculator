import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Quote } from '../quote'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  name = new FormControl('')
  quote = new FormControl('')
  constructor() { }

  updateName() {
    this.name.setValue('talk');
    // this.quote.setValue('talk')
  }
  updateQuote() {
    this.quote.setValue('tal')

  }


  ngOnInit() {
  }

}
