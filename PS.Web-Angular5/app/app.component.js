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
var Item_1 = require("./models/Item");
var AppComponent = (function () {
    function AppComponent() {
        this.List = new Array();
        this.item = new Item_1.Item();
        this.Clearitem();
        this.List.push(this.item);
    }
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
    AppComponent.prototype.AddNew = function () {
        this.Clearitem();
        $("#Add").modal();
    };
    AppComponent.prototype.FindNew = function () {
        this.Clearitem();
        $("#Find").modal();
    };
    AppComponent.prototype.Clearitem = function () {
        this.item.id = 0;
        this.item.region = "";
        this.item.district = "";
        this.item.city = "";
        this.item.indexx = "";
        this.item.street = "";
        this.item.houses = "";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./view/index.html",
        styleUrls: ['/../Content/Site.css', './../Content/bootstrap.min.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map