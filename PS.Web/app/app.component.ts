import { Component } from '@angular/core';

import { Input, OnInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: `./app/view/index.html`,
    styleUrls: ['./Content/Site.css', './Content/bootstrap.min.css']
})

export class AppComponent {
    List = new Array();
    item : {
        id: number,
        region: string,
        district: string,
        city: string,
        indexx: string,
        street: string,
        houses: string
    }

    constructor() {
        this.ClearItem();
        //this.List[0].push(this.item);
    }

    public EditNew(id:number) {
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
        this.ClearItem();
        $("#Add").modal();
    }

    FindNew() {
        this.ClearItem();
        $("#Find").modal();
    }

    ClearItem() {
        this.item = {
            id: 2,
            region: "",
            district: "",
            city: "",
            indexx: "",
            street: "",
            houses: ""
        }
    }

}