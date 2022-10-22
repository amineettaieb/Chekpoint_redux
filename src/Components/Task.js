import React, { useState } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Task = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className='task'>
            <div className={todo.isDone ? "done" : null}>{todo.task}</div>
            <div>
                <button onClick={() => dispatch(complete(todo.id))}>
                    {todo.isDone ? "Not Done" : "Done"}
                </button>
                <EditTask todo={todo} />
                <RiDeleteBin5Fill onClick={() => dispatch(deleteTask(todo.id))} style={{ width: 40, height: 40 }} />
            </div>
        </div>
    )

};
export default Task;