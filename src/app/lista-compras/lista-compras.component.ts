import {Component, OnInit, ViewChild} from '@angular/core';

import {faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';
import {AddItemService} from '../services/add-item.service';
import {Item} from '../models/Item';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
    selector: 'app-lista-compras',
    templateUrl: './lista-compras.component.html',
    styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {

    faTrash = faTrash;
    faCheck = faCheck;

    public isLoading: boolean = false;
    public loadingText: string = "Carregando ...";

    public idDeleting = 0;

    public items: Item[] = [];


    @ViewChild('deletedSwal',{static: false}) private deleteSwal: SwalComponent;
    @ViewChild('attItemSwal',{static: false}) private attItemSwal: SwalComponent;

    constructor(private _items: AddItemService, private modalService: NgbModal) {
        _items.getItems().subscribe((results) => {
            if (results.ok) {
                results.results.forEach((elem) => {
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

    openConfirmModal(content, id: number){
        this.modalService.open(content, { size: 'sm' });
        this.idDeleting = id;
    }

    deleteItem() {
        const id = this.idDeleting;
        if(!this.isLoading){
            this.isLoading = true;
            this.loadingText = "Removendo item ...";
            this._items.deleteItem({id}).subscribe((result) => {
                if(result.ok) {
                    this.items = this.items.filter((elem) => {
                        return elem.id !== id;
                    });
                }
                this.isLoading = false;
                this.deleteSwal.fire();
            });
        }
    }

    boughtItem(item: Item){
        item.bought = !item.bought;
        this._items.boughtItem({id: item.id, bought: item.bought}).subscribe((result) => {
            if(result.ok) {
                this.items.forEach((elem, i) => {
                    if(elem.id === item.id){
                        elem.bought = item.bought;
                    }
                });
                this.attItemSwal.fire();
            }
        });
    }

}
