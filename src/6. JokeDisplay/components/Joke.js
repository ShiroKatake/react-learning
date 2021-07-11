import React from "react";

function Joke(props) {
	return (
		<li>
			<h2>{props.elements.question}</h2>
			<p>{props.elements.punchline}</p>
			<hr />
		</li>
	);
}

export default Joke;
