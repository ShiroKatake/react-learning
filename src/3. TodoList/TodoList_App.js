import React from "react";
import TodoComponent from "./components/TodoItem";
import todo_data from "./todo_data";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: todo_data,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		this.setState((prevState) => {
			const newTodos = prevState.todos.map((todo) => {
				if (todo.id === id) {
					todo.checked = !todo.checked;
					return { todos: newTodos };
				}
			});
		});
		//alert("Works!");
	}

	render() {
		const todoComponents = this.state.todos.map((item) => {
			return <TodoComponent id={item.id} item={item} handleChange={this.handleChange} />;
		});
		return <div className="todo-list">{todoComponents}</div>;
	}
}

export default App;
