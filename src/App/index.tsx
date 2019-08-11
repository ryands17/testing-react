import React from 'react'
import './App.css'
import Checklist from 'components/Checklist/Checklist'

const checklistItems = [
  {
    id: 1,
    text: 'Learn React Testing Library',
    checked: false,
  },
  {
    id: 2,
    text: 'Learn Advanced JS concepts',
    checked: false,
  },
]

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
      <Checklist checklistItems={checklistItems} />
    </div>
  )
}

export default App
