import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vonn-directory its working';
  name = 'vonn';

  person = {
    name: 'vonn ryann cruz',
    belt: 'black'
  };

  /* passing an event to root components */

  yell(e:any){
    alert('Who is yelling?')
  }

}
