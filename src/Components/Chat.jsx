import { BotContext } from '../Context/BotToggle'
import './Chat.css'
import { useContext } from 'react'

function Chat() {

  const toggle = useContext(BotContext)

  return (
    <div className="chat-container">

      <div className="chat-head">
        <p className='bot-name'>Our Bot</p>
        <p className='close-btn' onClick={toggle.handleToggle}>X</p>
      </div>

        <p className="message sender">Hola, como puedo ayudarte hoy?</p>
        <p className="message receptor">Lorem Ipsum</p>
  
        <div className="text-bar">
          <p className='text-bar-text'>Escriba un mensaje...</p>
        </div>
    </div>
  )
}

export default Chat