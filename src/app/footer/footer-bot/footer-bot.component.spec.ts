import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBotComponent } from './footer-bot.component';

describe('FooterBotComponent', () => {
  let component: FooterBotComponent;
  let fixture: ComponentFixture<FooterBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
