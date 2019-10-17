import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-loading-app',
    templateUrl: './loading-app.component.html',
    styleUrls: ['./loading-app.component.scss']
})
export class LoadingAppComponent implements OnInit, OnChanges {

    @Input() isLoading: boolean = false;
    @Input() text: string = "Loading...";

    constructor(private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.isLoading) {
            this.spinner.show();
        }else{
            this.spinner.hide();
        }

    }



    

}
