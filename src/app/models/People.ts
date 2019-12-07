import {DayPeople} from './DayPeople';
import * as moment from 'moment';
import {DayChecked} from './DayChecked';

export class People {

    id: number;
    nome: string;
    day_peoples: DayPeople[];

    days: DayChecked[];

    constructor(
        {id, nome, day_peoples}: { id: number, nome: string, day_peoples: DayPeople[] },
    ) {
        this.id = id;
        this.nome = nome;
        this.day_peoples = day_peoples.map((elem) => {
            return new DayPeople({...elem});
        });

        this.days = this.day_peoples.map((elem) => {
            return new DayChecked(
                {
                    day: moment(elem.day).date(),
                    checked: elem.checked
                }
            );
        });
    }

    /**
     * Verify if exists a day in list and return the index
     * if not exists return -1
     */
    verifyDay(day: number){
        let e = -1;
        this.days.forEach((elem, i) => {
            if(elem.day === day) { e = i; }
        });
        return e;
    }

}
