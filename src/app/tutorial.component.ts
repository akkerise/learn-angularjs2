import {Component} from '@angular/core'

@Component({
  selector: 'app-tutorial',
  template: `
    <h1>Hello {{title | uppercase}}</h1>
    <p>Today is : {{today | date:'time'}}</p>
    <p>{{ 2 | customPipe}}</p>
  `
})

export class TutorialComponent {
  public title: string = 'Thanh';
  public today = Date.now();
}
