// import React from 'react'
// import './ChatBot.css'
// const ChatBot = () => {
//   return (
//     <div>ChatBot</div>
//   )
// }

// export default ChatBot
import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response', user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">ChatBot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.user ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatbot-input"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="chatbot-send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
