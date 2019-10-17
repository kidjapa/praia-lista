export class Item {

    id: number;
    tittle: string;
    qtd: number;
    bought: boolean;

    constructor(
        {id, tittle, qtd, bought}: {id: number, tittle: string, qtd: number , bought: boolean}
    ) {
        this.id = id;
        this.tittle = tittle;
        this.qtd = qtd;
        this.bought = bought;
    }

}
