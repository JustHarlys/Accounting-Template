import { BotContext } from '../Context/BotToggle'
import './WhatsappBot.css'
import { useContext } from 'react'

function WhatsappChatBot() {

  const toggle = useContext(BotContext)

  return (
    <div className='bot-circle' onClick={toggle.handleToggle}>
        <i className="fa-solid fa-robot"></i>
    </div>
  )
}

export default WhatsappChatBot