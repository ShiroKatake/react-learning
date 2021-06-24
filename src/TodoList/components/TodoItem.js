import React from 'react'

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" id="clean" name="isHouseCleaned" />
            <label for="clean"> Placeholder text.</label><br/>
        </div>
    )
}

export default TodoItem