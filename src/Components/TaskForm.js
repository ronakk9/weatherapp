import React, { useState } from "react";
import './TaskForm.css';

function TaskForm(){
    const [text, setText] = useState("React");
    function handleText(event){
        setText(event.target.value)

    }
    return(
        <div className="task-container">
        <div className="task-header">
        <h2>Task Manager</h2>

        </div>
        <div className="task-body">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="example@go_to_gym" aria-label="Recipient's username"
             aria-describedby="basic-addon2" onChange={handleText} value={text}> 
            </input>
             <span className="input-group-text myButton" id="basic-addon2">Create Task</span>
        </div>
        </div>
        </div>
    )
}

export default TaskForm;