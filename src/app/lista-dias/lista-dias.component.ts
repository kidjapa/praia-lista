import {Component, OnInit} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {DadosPessoasService} from '../services/dados-pessoas.service';
import {DaysData} from '../models/DaysData';
import {Moment} from 'moment';
import {DayChecked} from '../models/DayChecked';
import {People} from '../models/People';

@Component({
    selector: 'app-lista-dias',
    templateUrl: './lista-dias.component.html',
    styleUrls: ['./lista-dias.component.scss']
})
export class ListaDiasComponent implements OnInit {

    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    public data: DaysData;

    public show_configuration: boolean = false;
    public dataIsLoaded: boolean = false;

    public hoveredDate: NgbDate;

    public fromDate: NgbDate;
    public toDate: NgbDate;

    public _loading: boolean = false;

    constructor(calendar: NgbCalendar, private dadosPessoasService: DadosPessoasService) {
        dadosPessoasService.getData().subscribe((result) => {
            if(result.ok){
                this.data = new DaysData({...result.results});

                const initial_day = new Date(this.data.default_values.initial_date);
                this.fromDate = new NgbDate(initial_day.getFullYear(), initial_day.getUTCMonth()+1, initial_day.getDate()+1);
                this.toDate =  calendar.getNext(this.fromDate, 'd', this.data.default_values.qty_days-1);
                this.dataIsLoaded = true;

                console.log('%cData','background-color: yellow; color: red;',this.data);
            }
        });
    }

    ngOnInit() {
    }

    checkBoxChange(index: number, day: Moment){

        if(!this._loading){
            this._loading = true;
            const date = day.year()+'-'+(day.month()+1)+'-'+(day.date());

            let checked = true;
            if(this.data.peoples[index].verifyDay(day.date()) !== -1){
                this.data.peoples[index].days[this.data.peoples[index].verifyDay(day.date())].checked = !this.data.peoples[index].days[this.data.peoples[index].verifyDay(day.date())].checked;
                checked = this.data.peoples[index].days[this.data.peoples[index].verifyDay(day.date())].checked;
            }
            this.dadosPessoasService.setDayChecked(this.data.peoples[index].id, date, checked).subscribe(result => {
                if(result.ok){
                    if(this.data.peoples[index].verifyDay(day.date()) === -1){
                        this.data.peoples[index].days.push(new DayChecked({
                            checked: result.results.checked,
                            day: day.date()
                        }));
                    }
                }
                this._loading = false;
            });
        }

    }

    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
    }

    calendarIsHovered(date: NgbDate) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    calendarIsInside(date: NgbDate) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }

    calendarIsRange(date: NgbDate) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.calendarIsInside(date) || this.calendarIsHovered(date);
    }

    /**
     * Get the total cost for people
     */
    getTotalCostPeople(people: People){
        let value = 0.0;
        people.days.forEach((dayChecked) => {
           if(dayChecked.checked){
               value += this.data.getCostDay(dayChecked.day);
           }
        });
        return value.toFixed(2);
    }

}
