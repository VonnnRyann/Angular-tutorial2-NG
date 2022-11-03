import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the Homepage ...'
  @Input() personOne:any;
  
  /* passing an event to root components using output*/
  @Output() onYell = new EventEmitter()
  myString = 'I like chicken'
  myBoolean = true

  alertMe()  {
    alert('hello')
  }
  alertMe1(val:any)  {
    alert(val)
  }


  /* two way data binding */
  person = {
    name: 'vonn',
    belt: 'blue'
  }

  /* passing an event to root components */

  fireEvent(e:any){
    this.onYell.emit(e)
  }


  constructor() { }

  ngOnInit(): void {
  }


}
