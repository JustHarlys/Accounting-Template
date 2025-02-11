import Hero from "../Components/Hero"
import Nav from "../Components/Nav"
import { serviciosGenerales } from "../data/servicesPages"
import ServiciosGenerales from "../Components/ServiciosGenerales"
import WhatsappChatBot from "../Components/WhatsappChatBot"
import { useContext } from "react"
import { BotContext } from "../Context/BotToggle"
import Chat from "../Components/Chat"

const servicios = serviciosGenerales.map(servicio => {
  return <ServiciosGenerales
          key={servicio.id}
          nombre={servicio.nombre}
          descripcion={servicio.descripcion}
          icono={servicio.icono}
          />
})


function ServicesPages() {

  const {toggle} = useContext(BotContext)

  return (
    <>
    <Nav />

    <Hero />

    <div className="outer-general-services">
    {servicios}
    </div>

    {toggle ? <Chat /> : <WhatsappChatBot />}

    </>
  )
}

export default ServicesPages