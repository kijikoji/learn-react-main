import Header from "./components/Header"
import Entry from "./components/Entry"
import dataArray from "./data.js"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */
const EntryArray = dataArray.map(x => <Entry 
    img={x.img} 
    title={x.title}
    country={x.country}
    googleMapsLink={x.googleMapsLink}
    dates={x.dates}
    text={x.text}
    />)
console.log(EntryArray)

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                {}
            </main>
        </>
    )
}