import {Injectable} from '@angular/core';
import {MainServiceService} from './main-service.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddItemService {

    private prefix_path_main = '/main/items';

    constructor(private _mainService: MainServiceService) {
    }

    getItems(): Observable<any> {
        const path = this.prefix_path_main + '/get';
        return this._mainService.get(path);
    }


    addItem(params: Object): Observable<any> {
        const path = this.prefix_path_main + '/add';
        return this._mainService.post(path, params);
    }


    deleteItem(params: Object): Observable<any> {
        const path = this.prefix_path_main + '/delete';
        return this._mainService.post(path, params);
    }

}
