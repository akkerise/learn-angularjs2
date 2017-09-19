import {Component, ViewChild} from '@angular/core';
import {TutorialComponent} from "./tutorial.component"

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>Agree: {{agree}}</p>
      <p>Disgree: {{disgree}}</p>
      <input type="text" #textName (keyup)="0">
      <app-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></app-tutorial>
      <button (click)="changeName()">Change Name</button>
    </div>
  `,
})
export class AppComponent {
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  public parentVote = (agree: boolean) => {
  }

  changeName(){
    this.tutorialComponent.setName('This is data parent component data')
    // this.tutorialComponent.name
  }
}
