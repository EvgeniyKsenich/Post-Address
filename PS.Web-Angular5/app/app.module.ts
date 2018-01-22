import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { ItemService } from './Services/ItemService';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule  ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
