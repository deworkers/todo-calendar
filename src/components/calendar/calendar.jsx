import React, { useState, useEffect } from 'react';
import ActiveDay from '../activeDay.jsx';
import NewTask from '../newTask.jsx';
import DaysName from './daysName.jsx';
import CalendarList from './calendarList.jsx';
  
function Calendar(props) {
    let today = new Date();
    let todayString = today.toLocaleString().split(',')[0];


    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());

    let items = localStorage.getItem('task');

    if (!items) {
        localStorage.setItem('task', JSON.stringify([]))
        items = [];
    } else {
        items = JSON.parse(items);
    }
    
    function toLocalStorage(items) {
        localStorage.setItem('task', JSON.stringify(items))
    }

    const [taskList, setTasks] = useState(items);
    const [show, setShow] = useState(null);
    const [count, setCount] = useState(items.length);

    
    function toggleTask(id) {
        taskList.forEach(task => {
            if (task.id == id) {
                task.isClose = !task.isClose;
            }
        });
        handleSetShow(activeDay, taskList);
    }
    
    function addTask(task) {
        taskList.push(task);
        handleSetShow(activeDay, taskList);
    }

    function deleteTask(id) {
        let newArr = taskList.filter((task, index) => {
            return task.id != id;
        });

        handleSetShow(activeDay, newArr);
    }

    function handleSetShow(day, list) {
        if (day.date != '') {
            setTasks(list);
            setActiveDay(day);
            let filter = list.filter((task) => {
                return task.date == day.date;
            });
            setShow(filter);
            toLocalStorage(list);
        }
    }

    const [activeDay, setActiveDay] = useState(null);

    if (activeDay == null) {
        handleSetShow({
            title: '',
            date: todayString,
            active: null
        }, taskList);
    }

    function getMonthName() {
        let date = new Date(year, month);
        return date.toLocaleString('default', { month: 'long' });
    }

    function setViewMonth(diff) {
        if (month == 11 && diff == 1) {
            setMonth(0);
            setYear(year + 1)
        } else if (month == 0 && diff == -1) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month + diff);
        }
    }
   
    return (
        <div className="calendar-wrap">
            <div className="month-name">
                <button className='month-name-button prew' onClick={() => setViewMonth(-1)}></button>
                {getMonthName()} {year}
                <button className='month-name-button next' onClick={() => setViewMonth(1)}></button>
                </div>
            <div className="calendar">
                <DaysName></DaysName>
                <CalendarList 
                    today={today}
                    activeDay={activeDay}
                    taskList={taskList}
                    handleSetShow={handleSetShow}
                    year={year}
                    month={month}></CalendarList>
            </div>
            <ActiveDay 
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                show={show}
                activeDay={activeDay}>
            </ActiveDay>
            <NewTask
                count={count}
                setCount={setCount}
                activeDay={activeDay}
                addTask={addTask}>
            </NewTask>
        </div>
    );
}

export default Calendar;