import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My awesome app';
  status = true;
  people = [
    {
      name: 'john',
      id: 1,
      url: '../assets/man.svg'
    },
    {
      name: 'jane',
      id: 2,
      url: '../assets/woman.svg'
    }
  ];
  appList = ['AAA', 'BBB', 'CCC'];
  myText = 'Hello world';
  isClicked = true;
  name = 'Bob';
  clicked(event) {
    this.isClicked = !this.isClicked;
  }
  
  // tslint:disable-next-line:member-ordering
  dateToday = new Date(2017, 8, 13);
}
