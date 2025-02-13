import Nav from "../Components/Nav"
import founder from '../assets/founder.png'
import Hero from "../Components/Hero"
import Principios from "../Components/Principios"
import { principios } from "../data/principles"
import { nanoid } from "nanoid"
import WhoAreWe from "../Components/WhoAreWe"
import Timeline from "../Components/Timeline"
import WhatsappChatBot from "../Components/WhatsappChatBot"
import Chat from "../Components/Chat"
import { useContext } from "react"
import { BotContext } from "../Context/BotToggle"
import { dataValues } from "../data/values"
import Values from '../Components/Values'
import { wholeTeam } from "../data/teamMembers"
import OurTeam from "../Components/OurTeam"
import OverNav from "../Components/OverNav"
import Footer from "../Components/Footer"

const events = [
  { title: "Fundación de la Empresa", date: "2018", description: "Iniciamos nuestra aventura en el mundo del desarrollo."},
  { title: "Primer Gran Proyecto", date: "2019", description: "Lanzamos nuestro primer software exitoso."},
  { title: "Expansión Internacional", date: "2021", description: "Abrimos oficinas en varios países."},
  { title: "Innovación y Crecimiento", date: "2023", description: "Lideramos en tecnología y desarrollo de software."}
];


const principiosData = principios.map(principio => {

  return <Principios 
    key={nanoid()}
    name={principio.name}
    content={principio.content}
  />
})

const valores = dataValues.map(valor => {
  return <Values 
  key={nanoid()}
  nombre={valor.nombre}
  descripcion={valor.descripcion}
  img={valor.img}
  />
})

const equipo = wholeTeam.map(miembro => {
  return <OurTeam
  key={nanoid()}
  nombre={miembro.name}
  position={miembro.position}
  img={miembro.img}
  experience={miembro.experience}
  />
})

function AboutUsPage() {

  const {toggle} = useContext(BotContext)

  return (
    <>

      <OverNav />

      <Nav />

      {/* <Hero /> */}

      <WhoAreWe />
      
      <section className="principios-container">
        {principiosData}
      </section>

      <h1 style={{textAlign: "center", marginTop: 20}}>Valores</h1>
      <section className="valores-container">
        {valores}
      </section>


  


      <div className="timeline-container">
        <h1 style={{textAlign: "center"}}>Nuestra Historia</h1>
        <Timeline events={events} />
      </div>

      {toggle ? <Chat /> : <WhatsappChatBot />}

      <Footer />

    </>
  )
}

export default AboutUsPage