import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    const formEl = event.currentTarget
    console.log(formEl)
    const formData = new FormData(formEl)
    const email = formData.get("email")
    // Gather the info from the form
    // Submit it to a backend
    formEl.reset()
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);