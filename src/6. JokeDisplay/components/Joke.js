import React from "react";

class Joke extends React.Component {
	render() {
		return (
			<li>
				<h2>{props.elements.question}</h2>
				<p>{props.elements.punchline}</p>
				<hr />
			</li>
		);
	}
}

export default Joke;
