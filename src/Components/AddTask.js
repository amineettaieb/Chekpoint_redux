import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

export const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const add = () => {
        if (text) {
            dispatch(addTask({ id: Math.random(), task: text.trim(), isDone: false }))
            setText("")
        }
        else alert("Is Empty")
    }
    return (
        <div className="add">
            <input type="text" onChange={e => setText(e.target.value)} value={text} />
            <button onClick={add} style={{ cursor: " crosshair" }}>Add Task</button>
        </div>
    )
}