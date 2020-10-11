// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef()
  const [userInput, setUserInput] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // const value = event.target.elements[0].value
    // you can target via the elements' name or id prop too:
    // const value = event.target.elements.username.value

    onSubmitUsername(usernameInput.current.value)
  }

  const handleChange = event => {
    const value = event.target.value
    setUserInput(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInput}
          onChange={handleChange}
          id="username"
          type="text"
          value={userInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
