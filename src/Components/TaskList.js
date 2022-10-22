import React from 'react'
import { useSelector } from 'react-redux'
import Task  from './Task'


const TaskList = () =>{
    const taskList = useSelector(state.reducer.tasklist)
    const status = useSelector ((state=>state.reducer.status));
    return(
        <div>
        {status === "All"
    ?  taskList.map(todo => <Task todo={todo} key={todo.id}/>)
    : status === "Done"
    ? taskList.filter((todo) => todo.isDone === true).map((todo) => (
        <Task todo={todo} key={todo.id}/>
      ))
    :taskList.filter((todo) => todo.isDone === false).map((todo) => (
        <Task todo={todo} key={todo.id}/>
      ))}
    </div>
    )
}

export default TaskList;