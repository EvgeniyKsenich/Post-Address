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
var PositionService = (function () {
    function PositionService(http) {
        this.http = http;
        this.API_KEY = 'AIzaSyBJrW0TAFIud-Ulcf-8w9ZJO3nZQj5BJO0';
        this.API_URL = "https://maps.googleapis.com/maps/api/geocode/json?key=";
    }
    PositionService.prototype.findFromAddress = function (address) {
        var result = this.http.get(this.API_URL + this.API_KEY + "&address=" + address);
        return result;
    };
    return PositionService;
}());
PositionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PositionService);
exports.PositionService = PositionService;
//# sourceMappingURL=PositionService.js.map