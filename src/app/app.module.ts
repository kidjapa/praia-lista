import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeAppComponent} from './home-app/home-app.component';
import {ListaComprasComponent} from './lista-compras/lista-compras.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddCompraComponent} from './add-compra/add-compra.component';

import {HttpClientModule} from '@angular/common/http';

import {NgxSpinnerModule} from 'ngx-spinner';
import {LoadingAppComponent} from './components/loading-app/loading-app.component';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ListaDiasComponent} from './lista-dias/lista-dias.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    declarations: [
        AppComponent,
        HomeAppComponent,
        ListaComprasComponent,
        AddCompraComponent,
        LoadingAppComponent,
        ListaDiasComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgxSpinnerModule,
        SweetAlert2Module.forRoot(),
        NgbModule,
        NgxMaskModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
