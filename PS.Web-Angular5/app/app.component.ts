import { Component } from '@angular/core';

import { Input, OnInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './models/Item';
import { Error } from './models/Error';
import { ItemService } from './Services/ItemService';
import { Observable } from "rxjs/Observable";

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: `./view/index.html`,
    styleUrls: ['/../Content/Site.css', './../Content/bootstrap.min.css'],
    providers: [ItemService]
})

export class AppComponent implements OnInit {
    List = new Array<Item>();
    public item: Item;
    public error: string;

    constructor(private itemService: ItemService) {
        this.item = new Item();
        this.Clearitem();
    }

    GetNext() {
        this.itemService.getNext().subscribe((data: Array<Item>) => this.List = this.List.concat(data));
    }

    ngOnInit() {
        this.itemService.getNext().subscribe((data: Array<Item>) => this.List = data);
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

    Find() {
        var result = this.itemService.getById(this.item.id).subscribe((data: any) => {
            if (data == null) {
                console.log("Searching error");
                this.error = "No element with such id";
            }
            else {
                this.ClearError();
                this.item = data;
                console.log(data);
            }
        }
        );
    }

    SaveEdit() {
        console.log("Update item; Id:" + this.item.id);
        var result = this.itemService.updateItem(this.item).subscribe((data: any) => console.log(data));
        $("#Edit").modal('hide');
    }

    Delete(item: Item) {
        console.log("Delete item; Id:" + item.id);
        var result = this.itemService.deleteItem(item.id).subscribe((data: any) => console.log(data));

        var index = -1;
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].id == item.id) {
                index = i;
                break;
            }
        }
        this.List.splice(index, 1);
    }

    AddNew() {
        this.Clearitem();
        $("#Add").modal();
    }

    FindNew() {
        this.Clearitem();
        this.ClearError();
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

    ClearError() {
        this.error = "";
    }
}