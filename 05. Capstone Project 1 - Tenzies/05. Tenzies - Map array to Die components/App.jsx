import Die from "./Die"
import { useState } from "react"
/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    /** map over dice here */
    const [diceValues, setDiceValues] = useState(generateAllNewDice())

    function diceList(){
        let l = diceValues;
        return l.map(x => <Die value={x}></Die>)
    }
    
    return (
        <main>
            <div className="dice-container">
                {diceList()}
            </div>
        </main>
    )
}