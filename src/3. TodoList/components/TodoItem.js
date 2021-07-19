import React from "react";

class TodoItem extends React.Component {
	render() {
		return (
			<div className="todo-item">
				<input type="checkbox" id={this.props.id} name={this.props.name} checked={this.props.checked} />
				<label for={this.props.name}>{this.props.name}</label>
				<hr />
			</div>
		);
	}
}

export default TodoItem;
