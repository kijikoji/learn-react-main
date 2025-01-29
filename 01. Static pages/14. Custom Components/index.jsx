import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))



root.render(
    <MyPage />

)

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function MyPage() {
    return (
        <main>
            <h1>why im excited to be learning React!</h1>
            <ul>
                <li>to learn a popular language</li>
                <li>to build a portfolio</li>
                <li>to make projects</li>
                <li>use my knowledge html css and javascript</li>
            </ul>
        </main>
    )
}


