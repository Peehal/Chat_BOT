import React, { useState } from 'react'

function Auth({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('') // NEW
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = { name, username, email }
    onLogin(userData)
  }

  return (
    <div className="auth-container centered">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
        <p onClick={() => setIsSignup(!isSignup)} className="toggle">
          {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  )
}

export default Auth

