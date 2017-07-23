import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>Agree: {{agree}}</p>
      <p>Disgree: {{disgree}}</p>
      <input type="text" #textName (keyup)="0">
      <app-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></app-tutorial>
    </div>
  `,
})
export class AppComponent {
  public title = 'app';
  public agree: number = 0;
  public disgree: number = 0;
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];
  public parentVote = (agree: boolean) => {
    if (agree) this.agree++;
    else this.disgree++
  }
}
