import {DayPeople} from './DayPeople';
import {DefaultValues} from './DefaultValues';
import {People} from './People';
import * as moment from 'moment';

export class DaysData {

    default_values: DefaultValues;
    peoples: People[];

    constructor(
        {default_values, day_peoples, peoples}: { default_values: DefaultValues, day_peoples: DayPeople[], peoples: People[] }
    ) {
        this.default_values = new DefaultValues({...default_values});

        this.peoples = peoples.map(elem => {
            return new People({...elem});
        });
    }

    getCostDay(day: number){
        let qty = 0;
        this.peoples.forEach((people) => {
           people.days.forEach(daychecked => {
               if(daychecked.day === day && daychecked.checked){
                   qty++;
               }
           });
        });
        if(qty <= 0) { return 0.0; }
        return parseFloat((this.default_values.daily_value/qty).toFixed(2));
    }

    getArrayDays(){
        const r = [];
        for(let i =0; i < this.default_values.qty_days; i++){
            r.push(moment(new Date(this.default_values.initial_date)).add(i, 'days'));
        }
        return r;
    }

}
