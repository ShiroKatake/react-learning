import React from "react";

class Joke extends React.Component {
	render() {
		return (
			<li>
				<h2>{this.props.elements.question === true ? "yes" : "no"}</h2>
				<p>{this.props.elements.punchline}</p>
				<hr />
			</li>
		);
	}
}

export default Joke;
