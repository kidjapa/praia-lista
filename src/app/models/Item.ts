export class Item {

    id: number;
    tittle: string;
    qtd: number;

    constructor(
        {id, tittle, qtd}: {id: number, tittle: string, qtd: number }
    ) {
        this.id = id;
        this.tittle = tittle;
        this.qtd = qtd;
    }

}
