import {Component, OnInit} from '@angular/core';

import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {AddItemService} from '../services/add-item.service';
import {Item} from '../models/Item';

@Component({
    selector: 'app-lista-compras',
    templateUrl: './lista-compras.component.html',
    styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {

    faTrash = faTrash;

    public items: Item[] = [];

    constructor(private _items: AddItemService) {
        _items.getItems().subscribe((results) => {
            if (results.ok) {
                results.results.forEach((elem, i) => {
                   this.items.push(new Item({...elem}));
                });
            }
        });

    }

    ngOnInit() {
    }


    public onItemAdd($event) {
        this.items.push(new Item({...$event}));
    }

    deleteItem(id: number) {
        this._items.deleteItem({id}).subscribe((result) => {
            console.log(result);
            if(result.ok) {
                alert(result.results);
            }
            this.items = this.items.filter((elem) => {
                return elem.id !== id;
            });
        });
    }

}
