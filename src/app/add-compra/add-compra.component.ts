import {Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {AddItemService} from '../services/add-item.service';
import {FormControl, Validators} from '@angular/forms';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
    selector: 'app-add-compra',
    templateUrl: './add-compra.component.html',
    styleUrls: ['./add-compra.component.scss']
})
export class AddCompraComponent implements OnInit, OnChanges {

    public tittle = new FormControl('', Validators.required);
    public qtd = new FormControl('', Validators.required);

    public isSaving = false;
    public loadingText: string = "";

    public isEdit: boolean = false;

    @Output() OnIsSaved = new EventEmitter<Object>();

    @Input() _title: string = "";
    @Input() _qtd: number = -1;
    @Input() _id: number = -1;

    @ViewChild('warningInputsSwal',{static: false}) private warningInputsSwal: SwalComponent;

    constructor(private _addItem: AddItemService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges){
        if(typeof changes._qtd !== "undefined" &&
                typeof changes._title !== "undefined" &&
                typeof changes._id !== "undefined"){

            if(changes._qtd.currentValue !== -1 && changes._title.currentValue !== ""){
                this._qtd = changes._qtd.currentValue;
                this._id = changes._id.currentValue;
                this._title = changes._title.currentValue;

                this.isEdit = true;

                this.tittle.setValue(this._title);
                this.qtd.setValue(this._qtd);

                const inputSelect = <HTMLInputElement>document.getElementById('qtd');
                inputSelect.focus();
            }
        }else{
            // Se foi acionado e os valores atuais são diferentes do default, estão tentando alterar o mesmo item novamente
            if(this._qtd !== -1 && this._title !== "") {
                this.tittle.setValue(this._title);
                this.qtd.setValue(this._qtd);
                this.isEdit = true;
            }else{
                this.isEdit = false;
            }
        }
    }

    saveItem() {

        if(!this.isSaving) {
            if (this.tittle.valid && this.qtd.valid) {
                this.isSaving = true;
                this.loadingText = "Salvando item ...";

                let params = {
                    tittle: this.tittle.value,
                    qtd: this.qtd.value
                };

                if(this.isEdit){
                    this.loadingText = "Salvando Edição ...";
                    params['id'] = this._id;
                }

                this._addItem.addItem(params).subscribe((result) => {
                    this.isSaving = false;
                    this.isEdit = false;
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
        this.isEdit = false;
    }
}
