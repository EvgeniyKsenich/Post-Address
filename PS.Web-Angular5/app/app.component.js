"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@agm/core");
var Item_1 = require("./models/Item");
var ItemService_1 = require("./Services/ItemService");
var PositionService_1 = require("./Services/PositionService");
var AppComponent = (function () {
    function AppComponent(itemService, positionService, ngZone) {
        this.itemService = itemService;
        this.positionService = positionService;
        this.ngZone = ngZone;
        this.lat = 50.401699;
        this.lng = 30.252512;
        this.List = new Array();
        this.item = new Item_1.Item();
        this.Clearitem();
    }
    AppComponent.prototype.GetNext = function () {
        var _this = this;
        this.itemService.getNext().subscribe(function (data) { return _this.List = _this.List.concat(data); });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getNext().subscribe(function (data) {
            _this.List = data;
        });
    };
    AppComponent.prototype.EditNew = function (id) {
        var index = -1;
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].id == id) {
                index = i;
                break;
            }
        }
        this.item = this.List[index];
        $("#Edit").modal();
    };
    AppComponent.prototype.CloseMap = function () {
        $('#mapCollapse').collapse("hide");
    };
    AppComponent.prototype.FindOnMap = function (item) {
        var _this = this;
        $('#mapCollapse').collapse("show");
        //item.region item.district item.city item.street item.house
        this.positionService.findFromAddress(item.region + "," + item.district + "," + item.city + "," + item.street + item.house).subscribe(function (data) {
            console.log(data);
            if (data.results[0] != null) {
                _this.SearchResult = "Accurate to the house";
                _this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
            }
            else {
                //item.region + "," + item.district + "," + item.city + "," + item.street
                _this.positionService.findFromAddress(item.region + "," + item.district + "," + item.city + "," + item.street).subscribe(function (data) {
                    console.log(data);
                    if (data.results[0] != null) {
                        _this.SearchResult = "Accurate to the street";
                        _this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                    }
                    else {
                        //item.region + "," + item.district + "," + item.city
                        _this.positionService.findFromAddress(item.region + "," + item.district + "," + item.city).subscribe(function (data) {
                            console.log(data);
                            if (data.results[0] != null) {
                                _this.SearchResult = "Accurate to the city";
                                _this.setCoordinate(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                            }
                            else {
                                console.log('Map Searching error');
                                _this.SearchResult = "Search error";
                            }
                        });
                    }
                });
            }
        });
        this.InitMap();
    };
    AppComponent.prototype.InitMap = function () {
        this.map.triggerResize();
    };
    AppComponent.prototype.setCoordinate = function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
    };
    AppComponent.prototype.Find = function () {
        var _this = this;
        var result = this.itemService.getById(this.item.id).subscribe(function (data) {
            if (data == null) {
                console.log("Searching error");
                _this.error = "No element with such id";
            }
            else {
                _this.ClearError();
                _this.item = data;
                console.log(data);
            }
        });
    };
    AppComponent.prototype.SaveEdit = function () {
        console.log("Update item; Id:" + this.item.id);
        var result = this.itemService.updateItem(this.item).subscribe(function (data) { return console.log(data); });
        $("#Edit").modal('hide');
    };
    AppComponent.prototype.Delete = function (item) {
        console.log("Delete item; Id:" + item.id);
        var result = this.itemService.deleteItem(item.id).subscribe(function (data) { return console.log(data); });
        var index = -1;
        for (var i = 0; i < this.List.length; i++) {
            if (this.List[i].id == item.id) {
                index = i;
                break;
            }
        }
        this.List.splice(index, 1);
    };
    AppComponent.prototype.AddNew = function () {
        this.Clearitem();
        $("#Add").modal();
    };
    AppComponent.prototype.FindNew = function () {
        this.Clearitem();
        this.ClearError();
        $("#Find").modal();
    };
    AppComponent.prototype.Clearitem = function () {
        this.item.id = 0;
        this.item.region = "";
        this.item.district = "";
        this.item.city = "";
        this.item.indexx = "";
        this.item.street = "";
        this.item.house = "";
    };
    AppComponent.prototype.ClearError = function () {
        this.error = "";
    };
    return AppComponent;
}());
__decorate([
    core_2.ViewChild('maps'),
    __metadata("design:type", core_3.AgmMap)
], AppComponent.prototype, "map", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./view/index.html",
        styleUrls: ['/../Content/Site.css', './../Content/bootstrap.min.css'],
        providers: [ItemService_1.ItemService, PositionService_1.PositionService]
    }),
    __metadata("design:paramtypes", [ItemService_1.ItemService,
        PositionService_1.PositionService,
        core_2.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map