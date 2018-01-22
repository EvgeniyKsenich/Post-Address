import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Item } from '../models/Item';


@Injectable()
export class ItemService {
    Current = 0;
    Size = 20;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
     
    constructor(private http: HttpClient) {

    }

    getNext() {
        var result = this.http.get<Array<Item>>('/api/Address?count=' + this.Size + "&start=" + this.Current);
        this.Current += 20;
        return result;
    }

    getById(id: number) {
        var result = this.http.get<Array<Item>>('/api/Address/' + id );
        return result;
    }

    createItem(_item: Item) {
        return this.http
            .post("/api/Address", _item, {
                headers: this.httpOptions.headers
            });
    }

    updateItem(_item: Item) {
        return this.http
            .put("/api/Address", _item, {
                headers: this.httpOptions.headers
            });
    }

    deleteItem(_id: number) {
        return this.http
            .delete("/api/Address/" + _id, {
                headers: this.httpOptions.headers
            },);
    }
}