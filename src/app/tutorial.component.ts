import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tutorial',
  template: `
    <p>Child component: {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    Result: {{voted}}
  `
})

export class TutorialComponent {
  public voted: boolean = false;

  @Input() name: string;
  @Output() onVote = new EventEmitter<boolean>();

  setName = (name: string) => {
    this.name = name
  }

  vote = (agree) => {
    this.voted = true;
    this.onVote.emit(agree)
  }
}
