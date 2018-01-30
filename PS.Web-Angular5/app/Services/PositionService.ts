import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapItem } from '../models/MapItem';


@Injectable()
export class PositionService {
    API_KEY: string;
    API_URL: string;

    constructor(private http: HttpClient) {
        this.API_KEY = 'AIzaSyBJrW0TAFIud-Ulcf-8w9ZJO3nZQj5BJO0';
        this.API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=`;
    }

    findFromAddress(address: string) {
        var result = this.http.get<any>(this.API_URL + this.API_KEY + "&address=" + address);
        return result;
    }
}