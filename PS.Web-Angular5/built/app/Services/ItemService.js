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
var http_1 = require("@angular/common/http");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.Current = 0;
        this.Size = 20;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    ItemService.prototype.getNext = function () {
        var result = this.http.get('/api/Address?count=' + this.Size + "&start=" + this.Current);
        this.Current += 20;
        return result;
    };
    ItemService.prototype.getById = function (id) {
        var result = this.http.get('/api/Address/' + id);
        return result;
    };
    ItemService.prototype.createItem = function (_item) {
        return this.http
            .post("/api/Address", _item, {
            headers: this.httpOptions.headers
        });
    };
    ItemService.prototype.updateItem = function (_item) {
        return this.http
            .put("/api/Address", _item, {
            headers: this.httpOptions.headers
        });
    };
    ItemService.prototype.deleteItem = function (_id) {
        return this.http
            .delete("/api/Address/" + _id, {
            headers: this.httpOptions.headers
        });
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=ItemService.js.map