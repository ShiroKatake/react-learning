import React from "react";

function TodoItem(props) {
	return (
		<div>
			<input type="checkbox" id={props.id} name={props.item.name} checked={props.item.checked} onChange={props.onChange} />
			<label for={props.item.name}>{props.item.name}</label>
			<hr />
		</div>
	);
}

export default TodoItem;
