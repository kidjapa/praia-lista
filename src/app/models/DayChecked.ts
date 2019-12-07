export class DayChecked {

    day: number;
    checked: boolean;

    days: number[];

    constructor(
        {day, checked}: { day: number, checked: boolean},
    ) {
        this.day = day;
        this.checked = checked;
    }

}
