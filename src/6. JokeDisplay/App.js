import React from 'react'
import Joke from './components/Joke'

function App() {
    return (
        <Joke elements={{
            question: "",
            punchline: ""
        }}/>
    )
}

export default App