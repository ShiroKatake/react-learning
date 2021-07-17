import React from "react";

class TodoItem extends React.Component {
	render() {
		return (
			<div className="todo-item">
				<input type="checkbox" id="clean" name="isHouseCleaned" />
				<label for="clean"> Placeholder text.</label>
				<br />
			</div>
		);
	}
}

export default TodoItem;
