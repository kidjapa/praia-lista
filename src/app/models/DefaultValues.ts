export class DefaultValues {

    qty_days: number;
    initial_date: string;
    daily_value: number;

    constructor(
        {qty_days, initial_date, daily_value}: { qty_days: number, initial_date: string, daily_value: number },
    ) {
        this.qty_days = qty_days;
        this.initial_date = initial_date;
        this.daily_value = daily_value;
    }

}
