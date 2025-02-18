import React from "react"

/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 * list of all the languages 
 * list of all letters
 * box to hold character of selected word
 * button for new game
 * 
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 * languages need a name, color, text color, and if its dead to be stored as a list of objects
 * letters need name and if its been selected in state color can be derived
 * bowxes can be derived from the selected word
 * button state can be derived from the game state
 * 
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 * though clicking the letter buttons
 * 
 */

export default function Hangman() {
    return (
        <main>
            Game goes here
        </main>
    )
}
