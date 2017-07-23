import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TutorialComponent} from './tutorial.component';
import {FormsModule} from "@angular/forms"

@NgModule({
    declarations: [
        AppComponent,
        TutorialComponent
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
