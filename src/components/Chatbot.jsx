import React, { useState, useEffect } from 'react'
import History from './History'

function Chatbot({ user }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const welcomeMsg = { sender: 'bot', text: 'Hey there\nHow can I help you today?' }
    setMessages([welcomeMsg])
  }, [])

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { sender: 'user', text: input }
    setMessages([...messages, newMsg])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Processing your query...' }])
    }, 1000)
  }

  return (
    <div className="chat-layout">
      <div className="chat-left">
        <History messages={messages} />
      </div>
      <div className="chat-main">
        <div className="chat-header">
          <span className="chat-icon">🤖</span>
          <span>CHATBOT</span>
        </div>
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Messages..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>↑</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot