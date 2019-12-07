import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-app',
    templateUrl: './home-app.component.html',
    styleUrls: ['./home-app.component.scss']
})
export class HomeAppComponent implements OnInit {

    public tabActive: string = 'lista_dias';

    constructor() {
    }

    ngOnInit() {
    }

    public selectTab(tab: string) {
        if(tab !== ""){
            this.tabActive = tab;
        }
    }

}
