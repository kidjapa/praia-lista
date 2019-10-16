import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {

  faTrash = faTrash;

  public itens = [
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'},
    {'id': 1, 'title': 'Feijão', 'qtd': '1', 'type': 'KG'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
