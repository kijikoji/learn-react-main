import { useState } from "react"
import WindowTracker from "./WindowTracker"


export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
    */
   const [show, setShow] = useState(true)
   
    return (
        <main className="container">
            <button onClick={() => setShow(prevShow => !prevShow)}>
                Toggle WindowTracker
            </button>
            {show ? <WindowTracker /> : null}
        </main>
    )
}