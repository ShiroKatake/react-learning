import React from "react";
import TodoComponent from "./components/TodoItem";
import todo_data from "./todo_data";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: todo_data,
		};
	}

	render() {
		const todoComponents = this.state.todos.map((item) => {
			return <TodoComponent id={item.id} name={item.name} checked={item.checked} />;
		});
		return <div className="todo-list">{todoComponents}</div>;
	}
}

export default App;
