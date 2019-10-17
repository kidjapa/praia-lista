import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AddItemService} from '../services/add-item.service';
import {FormControl, Validators} from '@angular/forms';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
    selector: 'app-add-compra',
    templateUrl: './add-compra.component.html',
    styleUrls: ['./add-compra.component.scss']
})
export class AddCompraComponent implements OnInit {

    public tittle = new FormControl('', Validators.required);
    public qtd = new FormControl('', Validators.required);

    public isSaving = false;
    public loadingText: string = "";

    @Output() OnIsSaved = new EventEmitter<Object>();

    @ViewChild('warningInputsSwal',{static: false}) private warningInputsSwal: SwalComponent;

    constructor(private _addItem: AddItemService) {
    }

    ngOnInit() {
    }

    saveItem() {

        if(!this.isSaving) {
            if (this.tittle.valid && this.qtd.valid) {
                this.isSaving = true;
                this.loadingText = "Salvando item ...";
                this._addItem.addItem({
                    tittle: this.tittle.value,
                    qtd: this.qtd.value
                }).subscribe((result) => {
                    this.isSaving = false;
                    this.OnIsSaved.emit(result.results);
                    this.resetForm();
                });
            } else {
                this.warningInputsSwal.fire();
            }
        }

    }

    resetForm(){
        this.tittle.setValue('');
        this.qtd.setValue('');
    }
}
