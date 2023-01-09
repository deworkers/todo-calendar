function getDay(date) {
    // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

function createCalendar(year, month) {
    let d = new Date(year, month);
    let days = [];

    for (let i = 0; i < getDay(d); i++) {
        days.push({
            title: '',
            date: '',
            active: null,
        });
    }

    while (d.getMonth() == month) {
        let day = {
            title: d.getDate(),
            date: d.toLocaleDateString('ru-RU'),
            active: null,
        };
        days.push(day);
        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            days.push({
                title: '',
                date: d.toLocaleDateString('ru-RU'),
                active: null,
            });
        }
    }
    return days;
}

export default createCalendar;
