import React from "react";
import Joke from "./components/Joke";

class App extends React.Component {
	render() {
		return (
			<ol>
				<Joke
					elements={{
						question: true,
						punchline: "I don't know, but the flag is a big plus.",
					}}
				/>
				<Joke
					elements={{
						question: false,
						punchline: "Because every play has a cast.",
					}}
				/>
			</ol>
		);
	}
}

export default App;
