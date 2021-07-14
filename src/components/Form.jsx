import React, { useState } from 'react';

const Form = props => {
    const [taskForm, setTaskForm] = useState({
        Task: "",
        isCompleted: false
    });
    const handleOnChange = e => {
        setTaskForm({...taskForm, [e.target.name] : e.target.value});
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        props.newTask(taskForm);
        setTaskForm({...taskForm, 
            Task: ""
        })
    }
    const handleChecked = e => {
        setTaskForm({...taskForm, [e.target.name] : e.target.checked});
    }
    return(
        <div className="col-6">
        <h3>Add A Task</h3>
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="Task">Task</label>
                <input type="text" name="Task" className="form-control" onChange={handleOnChange}/>
            </div>
            <div className="form-group">
                <input type="checkbox" name="isCompleted" checked={taskForm.isCompleted} onChange={handleChecked}/>
                <label htmlFor="isCompleted">Completed</label>
            </div>
            <input type="submit" value="Add Task" className="btn btn-success"/>
        </form>
        </div>
    )
}

export default Form;