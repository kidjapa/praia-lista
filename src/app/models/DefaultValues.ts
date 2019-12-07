export class DefaultValues {

    qty_days: number;
    initial_date: string;
    daily_value: number;
    default_dashboard: number;

    constructor(
        {qty_days, initial_date, daily_value, default_dashboard}: { qty_days: number, initial_date: string, daily_value: number, default_dashboard: number },
    ) {
        this.qty_days = qty_days;
        this.initial_date = initial_date;
        this.daily_value = daily_value;
        this.default_dashboard = default_dashboard;
    }

}
