import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TutorialComponent} from './tutorial.component'
import {FormsModule} from "@angular/forms"
import {CustomPipe} from "./custom.pipe"

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
