import React from 'react';

const complete = {
    backgroundColor: "#71BC68"
}
const notComplete = {
    backgroundColor: "#FF6961"
}

const Results = props => {
    const handleChecked = e => {
        props.updateStatus(e.target.value);
    }
    const trashTask = i => {
        props.delete(i)
    }
    return(
        <div className="col-6">
            <h3>To Do List</h3>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th>Task</th>
                    <th>Completed?</th>
                    <th>Delete</th>
                </tr>
                {
                    props.toDoList.map((listedTask, i) => {
                        return <tr style={listedTask.isCompleted ? complete : notComplete}>
                            <td>{listedTask.Task}</td>
                            <td><input type="checkbox" checked={listedTask.isCompleted} onChange={handleChecked} value={i}/></td>
                            <td><button onClick={ () => trashTask(i)} value="Delete">Delete</button></td>
                        </tr>
                    })
                }
            </thead>
            </table>
        </div>
    )
}

export default Results;