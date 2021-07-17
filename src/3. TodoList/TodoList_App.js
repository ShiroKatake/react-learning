import React from "react";
import TodoComponent from "./components/TodoItem";

class App extends React.Component {
	render() {
		return (
			<div className="todo-list">
				<TodoComponent />
				<TodoComponent />
				<TodoComponent />
			</div>
		);
	}
}

export default App;
