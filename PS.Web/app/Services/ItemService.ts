import { Http } from '@angular/http';
import { Item } from '../models/Item';

export class UserService {
    Current = 0;
    Size = 20;

    constructor(Size: number) {
        this.Size = Size;
    }

    getNext() {
        
    }

    createUser(item: Item) {
        
    }

    updateUser(item: Item) {
        
    }

    deleteUser(id: number) {
        

    }
}