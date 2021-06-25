import React from 'react'
import Joke from './components/Joke'

function App() {
    return (
        <ol>
            <Joke elements={{
                question: "",
                punchline: ""
            }}/>
        </ol>
    )
}

export default App