import React from 'react'
import './App.css'
// import Checklist from 'components/Checklist/Checklist'
import Users from 'components/Users/Users'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="app-link"
        >
          React + Testing
        </a>
      </h1>
      {/* <Checklist /> */}
      <Users />
    </div>
  )
}

export default App
