import {Component, OnInit, ViewChild} from '@angular/core';

import {faTrash, faCheck, faEdit} from '@fortawesome/free-solid-svg-icons';
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
    faEdit  = faEdit;

    public isLoading: boolean = false;
    public loadingText: string = "Carregando ...";

    public idDeleting = 0;

    public items: Item[] = [];

    public edit: boolean = false;

    public _title: string = "";
    public _qtd: number = -1;
    public _id: number = -1;

    @ViewChild('deletedSwal',{static: false}) private deleteSwal: SwalComponent;
    @ViewChild('attItemSwal',{static: false}) private attItemSwal: SwalComponent;

    constructor(private _items: AddItemService, private modalService: NgbModal) {
        this.loadItens();
    }

    ngOnInit() {
    }

    public loadItens(){
        this.items = [];
        this._items.getItems().subscribe((results) => {
            if (results.ok) {
                results.results.forEach((elem) => {
                    this.items.push(new Item({...elem}));
                });
            }
        });
    }


    public onItemAdd($event) {
        if(!this.edit){
            this.items.push(new Item({...$event}));
        }else{
            this.loadItens();
            this.edit = false;
        }
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

    /**
     * Load item to edit
     * @param item Item Id for load items attributes
     */
    editItem(item: Item){
        this._qtd = item.qtd;
        this._id = item.id;
        this._title = item.tittle;
        this.edit = true;
    }

}
