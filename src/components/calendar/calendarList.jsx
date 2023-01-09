import React, { useState } from 'react';
import createCalendar from './createCalendar.js';

function CalendarList(props) {
    function getToday(day) {
        if (day.date.length > 0 && props.today.toLocaleString('ru-RU').indexOf(day.date) > -1) {
            return true;
        }
    }

    function getActiveDays(day) {
        let active = false;
        props.taskList.forEach((task) => {
            if (task.date == day.date) {
                active = true
            }
        })

        return active;
    }

    let calendarList = createCalendar(props.year, props.month).map((day, index) => {
        let select = false;
        if (props.activeDay) {
            select = props.activeDay.date == day.date;
        }
        return <div onClick={() => props.handleSetShow(day, props.taskList)} className={`day ${getActiveDays(day) ? 'active' : ''} ${select ? 'select' : ''} ${getToday(day) ? 'today' :''}`} key={index}>{day.title}</div>
    });

    return calendarList;
}

export default CalendarList;