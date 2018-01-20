import { Component } from '@angular/core';

import { Input, OnInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './models/Item';

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: `./app/view/index.html`,
    styleUrls: ['./Content/Site.css', './Content/bootstrap.min.css']
})

export class AppComponent {
    List = new Array();
    public item: Item;

    constructor() {
        this.item = new Item();
        this.Clearitem();
        this.List.push(this.item);
    }

    public EditNew(id: number) {
        var index = -1;
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].id == id) {
                index = i;
                break;
            }
        }

        this.item = this.List[index];
        $("#Edit").modal();
    }

    AddNew() {
        this.Clearitem();
        $("#Add").modal();
    }

    FindNew() {
        this.Clearitem();
        $("#Find").modal();
    }

    Clearitem() {
        this.item.id = 0;
        this.item.region = "";
        this.item.district = "";
        this.item.city = "";
        this.item.indexx = "";
        this.item.street = "";
        this.item.houses = "";
    }
}