import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

name = new FormControl('')
quote =new FormControl('')
  constructor() { }

  updateName(){
    this.name.setValue('talk');
    this.quote.setValue('talk')
  }
  // updateQuote(){
  //   this.quote.setValue('talk')
  // }

  ngOnInit() {
  }

}
