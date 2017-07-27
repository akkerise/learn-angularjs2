import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="col-xs-12 col-sm-4 col-md-4">
      <app-footer-top></app-footer-top>
    </div>
    <div class="col-xs-12 col-sm-4 col-md-4">
      <app-footer-mid></app-footer-mid>
    </div>
    <div class="col-xs-12 col-sm-4 col-md-4">
      <app-footer-bot></app-footer-bot>
    </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
