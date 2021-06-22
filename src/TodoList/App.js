import React from 'react'
import reactDom from 'react-dom'
import TodoComponent from './components/TodoItem'

function App() {
    return(
        <div className="todo-list">
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
        </div>
    )
}

export default App