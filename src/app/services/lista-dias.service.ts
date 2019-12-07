import { Injectable } from '@angular/core';
import {MainServiceService} from './main-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDiasService {

  private prefix_path_main = '/main/dias';

  constructor(private _mainService: MainServiceService) {
  }

  getDias(): Observable<any> {
    const path = this.prefix_path_main + '/get';
    return this._mainService.get(path);
  }


}
