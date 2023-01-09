import React, { useState } from 'react';

let daysNames = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
];

function DaysName(props) {
    let daysNameList = daysNames.map((day, index) => {
        return <div className="dayName" key={index}>{day}</div>
    });

    return daysNameList;
}

export default DaysName;