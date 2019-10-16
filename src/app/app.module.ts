import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCompraComponent } from './add-compra/add-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    ListaComprasComponent,
    AddCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
