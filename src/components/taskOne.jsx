import React from 'react';

function TaskOne(props) {
    return <div className={`task-one ${props.task.isClose ? 'close' : ''} ${props.task.priority ? 'priority' : ''}`}>
        <label htmlFor={props.task.id} >
            <input 
                id={props.task.id}
                type="checkbox" 
                checked={props.task.isClose}
                onChange={()=> props.toggleTask(props.task.id)}
                />
            {props.task.title}
        </label>
        <button onClick={() => props.deleteTask(props.task.id)}></button>
    </div>
}

export default TaskOne;