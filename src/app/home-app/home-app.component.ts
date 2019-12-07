import {Component, OnInit} from '@angular/core';
import {DadosPessoasService} from '../services/dados-pessoas.service';
import {DefaultValues} from '../models/DefaultValues';

@Component({
    selector: 'app-home-app',
    templateUrl: './home-app.component.html',
    styleUrls: ['./home-app.component.scss']
})
export class HomeAppComponent implements OnInit {

    public tabActive: string = 'lista_itens';
    public TIPOS_DASHBOARD = {
        0: 'lista_itens',
        1: 'lista_dias'
    };

    public default_values: DefaultValues;

    constructor(private dadosPessoasService: DadosPessoasService) {
        dadosPessoasService.getDefaultValues().subscribe(result => {
            if(result.ok){
                this.default_values = new DefaultValues({...result.results.default_values});
            }else{
                this.default_values = new DefaultValues({
                   initial_date: null,
                    default_dashboard: 0,
                    daily_value: 0,
                    qty_days: 0
                });
            }

            if(typeof this.TIPOS_DASHBOARD[this.default_values.default_dashboard] === 'undefined'){
                this.default_values.default_dashboard = 0;
            }
            this.tabActive = this.TIPOS_DASHBOARD[this.default_values.default_dashboard];
        });
    }

    ngOnInit() {
    }

    public selectTab(tab: string) {
        if(tab !== ""){
            this.tabActive = tab;
        }
    }

}
