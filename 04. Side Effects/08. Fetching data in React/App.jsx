import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    
    /**
     * Challenge:
     * Instead of console logging the data, save it in state
     * and display it to the page. (Just replace the hard-coded
     * object inside the `<pre>` element with the data)
     */

    // this will continusly re-render the page 
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data.name))

    
    return (
        <div>
            <pre >{JSON.stringify({ name: starWarsData }, null, 2)}</pre>
        </div>
    )
}