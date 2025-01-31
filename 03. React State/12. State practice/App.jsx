import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [count, setCount] = React.useState(0)

    /**
     * Challenge: 
     * Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */

    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */

    function add() {
        setCount(count + 1)
    }

    /**
     * Challenge: 
     * Add functionality to the minus button
     */

    function minus() {
        setCount(count - 1)
    }


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={minus} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
