import Hero from "../Components/Hero"
import Nav from "../Components/Nav"
import { serviciosGenerales } from "../data/servicesPages"
import ServiciosGenerales from "../Components/ServiciosGenerales"
import WhatsappChatBot from "../Components/WhatsappChatBot"
import { useContext } from "react"
import { BotContext } from "../Context/BotToggle"
import Chat from "../Components/Chat"
import OverNav from "../Components/OverNav"
import Footer from "../Components/Footer"

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

    <OverNav />

    <Nav />

    {/* <Hero /> */}

    
    <p style={{fontSize: 32, textAlign: 'center', padding: 50}}>Servicios que les ofrecemos</p>
    <p className="outer-services-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus purus ex. Nam molestie est et arcu mollis mattis. Pellentesque congue pulvinar magna, ut porttitor libero finibus consectetur. Curabitur bibendum a sem eu fringilla. Nunc et neque fermentum ligula lobortis lobortis nec eu nisl. Fusce in finibus sem.</p>
    <div className="outer-general-services">
    {servicios}
    </div>

    {toggle ? <Chat /> : <WhatsappChatBot />}

    <Footer />

    </>
  )
}

export default ServicesPages