import { Component } from '@angular/core';

import { Input, OnInit, AfterViewChecked, NgZone, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { AgmCoreModule, AgmMap } from '@agm/core';

import { Item } from './models/Item';
import { Error } from './models/Error';
import { MapItem } from './models/MapItem';

import { ItemService } from './Services/ItemService';
import { PositionService } from './Services/PositionService';


declare var $: any;
declare var google: any;

@Component({
    selector: 'my-app',
    templateUrl: `./view/index.html`,
    styleUrls: ['/../Content/Site.css', './../Content/bootstrap.min.css'],
    providers: [ItemService, PositionService]
})

export class AppComponent implements OnInit {
    lat: number = 50.401699;
    lng: number = 30.252512;
    List = new Array<Item>();
    public item: Item;
    public error: string;
    public SearchResult: string;

    @ViewChild('maps') map: AgmMap;

    constructor(private itemService: ItemService,
                private positionService: PositionService,
                private ngZone: NgZone) {
        this.item = new Item();
        this.Clearitem();
    }

    GetNext() {
        this.itemService.getNext().subscribe((data: Array<Item>) => this.List = this.List.concat(data));
    }

    ngOnInit() {
        this.itemService.getNext().subscribe((data: Array<Item>) => {
            this.List = data
        });
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

    CloseMap() {
        $('#mapCollapse').collapse("hide");
    }

    FindOnMap(item: Item) {
        $('#mapCollapse').collapse("show");
        //item.region item.district item.city item.street item.house
        this.positionService.findFromAddress(item.region+","+item.district+","+item.city+","+item.street+item.house).subscribe((data: any) => {
            console.log(data);
            if (data.results[0] != null) {
                this.SearchResult = "Accurate to the house";
                this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
            }
            else {
                //item.region + "," + item.district + "," + item.city + "," + item.street
                this.positionService.findFromAddress(item.region + "," + item.district + "," + item.city + "," + item.street).subscribe((data: any) => {
                    console.log(data);
                    if (data.results[0] != null) {
                        this.SearchResult = "Accurate to the street";
                        this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                    }
                    else {
                        //item.region + "," + item.district + "," + item.city
                        this.positionService.findFromAddress(item.region + "," + item.district + "," + item.city).subscribe((data: any) => {
                            console.log(data);
                            if (data.results[0] != null) {
                                this.SearchResult = "Accurate to the city";
                                this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                            }
                            else {
                                console.log('Map Searching error');
                                this.SearchResult = "Search error";
                            }
                        });

                    }
                });

            }
        });

        this.InitMap();
    }

    InitMap() {
        this.map.triggerResize();
    }

    setCoordinate(lat: number, lng:number) {
        this.lat = lat;
        this.lng = lng;
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
        this.item.house = "";
    }

    ClearError() {
        this.error = "";
    }
}