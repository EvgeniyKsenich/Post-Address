import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ItemService } from './Services/ItemService';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBJrW0TAFIud-Ulcf-8w9ZJO3nZQj5BJO0',
            libraries: ['places'],
            language: 'uk',
            region: 'UA'
        })],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
