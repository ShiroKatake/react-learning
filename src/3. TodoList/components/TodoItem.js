import React from "react";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			name: "Do something",
			isCompleted: false,
		};
	}

	render() {
		return (
			<div className="todo-item">
				<input type="checkbox" id={this.state.id} name={this.state.name} checked={this.state.isCompleted} />
				<label for="clean"> {this.state.name}.</label>
				<br />
				<hr />
			</div>
		);
	}
}

export default TodoItem;
