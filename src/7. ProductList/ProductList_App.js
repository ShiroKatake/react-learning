import React from "react";
import Product from "../6. JokeDisplay/components/Joke";

function App() {
	return (
		<ol>
			<Product
				elements={{
					question: "What's the best thing about Switzerland?",
					punchline: "I don't know, but the flag is a big plus.",
				}}
			/>
			<Product
				elements={{
					question: "Why do we tell actors to 'break a leg'?",
					punchline: "Because every play has a cast.",
				}}
			/>
		</ol>
	);
}

export default App;
