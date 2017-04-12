import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './components/app.component';


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, MdToolbarModule, MdCardModule, MdButtonModule, MdCheckboxModule],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }