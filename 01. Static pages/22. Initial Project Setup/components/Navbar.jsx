/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */
export default function Navbar() {
    return (
        <header className="header-bar">
            <nav className="nav-bar">
                <img src=".\react-logo.png" alt="react logo" className="react-logo"/>
                <h1 className="nav-title">ReactFacts</h1>
            </nav>
        </header>
    )
    
}