import React, { useState } from 'react'
import Auth from './components/Auth'
import Chatbot from './components/Chatbot'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app-container">
      {!user ? <Auth onLogin={setUser} /> : <Chatbot user={user} />}
    </div>
  )
}

export default App
