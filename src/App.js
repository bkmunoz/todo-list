import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';


function App() {
  const [taskList, setTasks] = useState([]);
  const addTask = taskForm => {
        setTasks([...taskList, taskForm]);
  }
  const updateCompleted = i => {
    taskList[i].isCompleted = !taskList[i].isCompleted;
    setTasks([...taskList]);
  }
  const deleteTask = i => {
    console.log(taskList[i]);
    setTasks([...taskList.slice(0, i), ...taskList.slice(i+1)]);
  }
  return (
    <div className="container">
      <div className="row">
      <Form newTask={addTask}/>
      <Results toDoList={taskList} updateStatus={updateCompleted} delete={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
