import React, { useState, useEffect } from 'react';

function NewTask(props) {
    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] =  useState('');
    const [id, setID] =  useState(props.count);
    const [priority, setPriority] =  useState(false);

    function handleNewTask() {
        props.setCount(props.count + 1);
        setID(props.count + 1);

        let form = {
            title,
            date: props.activeDay.date,
            id,
            priority,
            isClose: false
        }

        props.addTask(form);
        setShowForm(false);
        setTitle('');
    }

    function showButton() {
        if (props.activeDay) {
            return <button onClick={() => setShowForm(true)}>Новая задача</button>
        }
    }

    function form() {
        if (showForm) {
            return <div className='form-modal'>
                <div className='form-body'>
                    <h2>Новая задача</h2>
                    <div className='form-close' onClick={() => setShowForm(false)}></div>
                    <div className='form-input'>
                        <input 
                            type="text" 
                            onChange={(event) => setTitle(event.target.value)}
                            value={title}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="checkbox">
                            <input 
                                id='checkbox' 
                                type="checkbox" 
                                onChange={(event) => setPriority(!priority)} 
                            />
                            Приоритетная задача
                        </label>
                    </div>
                    <button disabled={title.length < 1} onClick={() => handleNewTask()}>Создать</button>
                </div>
            </div>
        }
    }

    return(<div className='new-task-form'>
        <div className='form-wrap'>{showButton()}</div>
        {form()}
    </div>)
}

export default NewTask;