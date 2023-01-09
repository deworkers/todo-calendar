import React, { useState, useEffect } from 'react';
import TaskOne from './taskOne.jsx';

function ActiveDay (props) {
    let getDayTitle = props.activeDay ? props.activeDay.date : 'Не выбран день';
    
    function getTaskList() {
        if (props.activeDay) {
            if (props.show) {
                return props.show.map((task, index) => {
                    return <TaskOne
                        key={index}
                        task={task}
                        toggleTask={props.toggleTask}
                        deleteTask={props.deleteTask}>
                    </TaskOne>
                });
            } else {
                return <div className='task-empty'>Нет задач</div>
            }
        }
    } 

    return (
        <div className='tasks'>
            <div className='tasks-title'>
                {getDayTitle}
            </div>
            <div className='task-list'>
                {getTaskList()}
            </div>
        </div>
    )
}

export default ActiveDay;