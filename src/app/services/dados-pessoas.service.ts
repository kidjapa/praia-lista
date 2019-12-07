import {Injectable} from '@angular/core';
import {MainServiceService} from './main-service.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DadosPessoasService {

    private prefix_path_main = '/main/dias';

    constructor(private _mainService: MainServiceService) {
    }

    getData(): Observable<any> {
        const path = this.prefix_path_main + '/get';
        return this._mainService.get(path);
    }

    setDayChecked(pessoa_id: number, day: string, checked: boolean): Observable<any> {
        const path = this.prefix_path_main + '/setdaypeople';
        return this._mainService.post(path,{'people_id': pessoa_id, 'date': day, 'checked': checked});
    }

    getDefaultValues(){
        const path = this.prefix_path_main + '/getDefaultValues';
        return this._mainService.get(path);
    }
}
