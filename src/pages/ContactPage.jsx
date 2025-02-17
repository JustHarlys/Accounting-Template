import Form from "../Components/Form"
import Nav from "../Components/Nav"
import OverNav from "../Components/OverNav"
import Footer from "../Components/Footer"
import WhatsappChatBot from "../Components/WhatsappChatBot"
import Chat from "../Components/Chat"
import { useContext } from "react"
import { BotContext } from "../Context/BotToggle"


function ContactPage() {

  const {toggle} = useContext(BotContext)

  return (
    <>

      <OverNav />
      <Nav />

      <Form />

      <Footer />

      {toggle ? <Chat /> : <WhatsappChatBot />}

    </>
  )
}

export default ContactPage