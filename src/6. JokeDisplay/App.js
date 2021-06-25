import React from 'react'
import Joke from './components/Joke'

function App() {
    return (
        <ol>
            <Joke elements={{
                question: "What's the best thing about Switzerland?",
                punchline: "I don't know, but the flag is a big plus."
            }}/>
        </ol>
    )
}

export default App