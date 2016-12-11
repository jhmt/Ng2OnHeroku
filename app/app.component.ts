import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<p>{{ title }}</p>'
})
export class AppComponent {
  public title: string;

  constructor () {
    this.title = 'Hello Angular 2 App!';
  }
}