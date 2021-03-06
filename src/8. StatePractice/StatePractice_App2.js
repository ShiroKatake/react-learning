import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
	}

	render() {
		return (
			<div>
				<h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
			</div>
		);
	}
}

export default App;
