export default function dateFilter(value: Date, format = 'date'): string {

    type dateFormat = {
        day: string;
        year: string;
        month: string;
        hour: string;
        minute: string;
        second: string;
    }

    const options = {} as dateFormat;

    if(format.includes('date')) {
        options.day = '2-digit';
        options.year = 'numeric';
        options.month = 'long';
    }

    if(format.includes('time')) {
        options.hour = '2-digit';
        options.minute = '2-digit';
        options.second = '2-digit';
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
