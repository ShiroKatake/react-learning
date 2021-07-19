import React from "react";
import TodoComponent from "./components/TodoItem";
import todo_data from "./todo_data";

class App extends React.Component {
	render() {
		const todoComponents = todo_data.map((todo) => {
			return <TodoComponent id={todo.id} name={todo.name} checked={todo.checked} />;
		});
		return <div className="todo-list">{todoComponents}</div>;
	}
}

export default App;
