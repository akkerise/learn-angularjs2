import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMidComponent } from './footer-mid.component';

describe('FooterMidComponent', () => {
  let component: FooterMidComponent;
  let fixture: ComponentFixture<FooterMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
