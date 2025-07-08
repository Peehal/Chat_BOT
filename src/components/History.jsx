import React from 'react'

function History({ messages }) {
  const grouped = []
  let session = []

  messages.forEach((msg, idx) => {
    if (msg.sender === 'bot' && msg.text.includes('Hey there') && session.length > 0) {
      grouped.push(session)
      session = []
    }
    session.push(msg)
  })

  if (session.length) grouped.push(session)

  return (
    <div className="history-panel">
      <h3>Past Sessions</h3>
      {grouped.map((session, sIdx) => (
        <div key={sIdx} className="session-entry">
          <h4>Session {sIdx + 1}</h4>
          <ul>
            {session.map((msg, idx) => (
              <li key={idx} className={msg.sender}>
                <span>{msg.sender === 'user' ? '🧑' : '🤖'} </span>{msg.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default History
