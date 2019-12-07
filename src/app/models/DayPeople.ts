export class DayPeople {

    id: number;
    people_id: number;
    day: string;
    checked: boolean;

    constructor(
        {id, day, people_id,checked}: { id: number, day: string, people_id: number, checked: boolean }
    ) {
        this.id = id;
        this.day = day;
        this.people_id = people_id;
        this.checked = checked;
    }

}
