import ReactDOM from 'react-dom/client';

function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  /**
   * Challenge: add our new function to the button
   */

  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */
  
  return (
    <main className="container">
      <img
        onMouseEnter={() => console.log("something")}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);