import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Добро пожаловать {{name}}!</h1>`
})
export class AppComponent {
    name = 'Name';
    items = new Array();

    constructor() { };
}