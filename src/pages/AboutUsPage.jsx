import Nav from "../Components/Nav"
import founder from '../assets/founder.png'
import Hero from "../Components/Hero"
import Principios from "../Components/Principios"
import { principios } from "../data/principles"
import { nanoid } from "nanoid"
import WhoAreWe from "../Components/WhoAreWe"
import OurTeamSlider from "../Components/OurTeamSlider"
import Timeline from "../Components/Timeline"
import WhatsappChatBot from "../Components/WhatsappChatBot"
import Chat from "../Components/Chat"
import { useContext } from "react"
import { BotContext } from "../Context/BotToggle"
import { dataValues } from "../data/values"
import Values from '../Components/Values'

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

function AboutUsPage() {

  const {toggle} = useContext(BotContext)

  return (
    <>
      <Nav />

      <Hero />

      <WhoAreWe />

      <section className="principios-container">
        {principiosData}
      </section>

      <h1 style={{textAlign: "center"}}>Valores</h1>
      <section className="valores-container">
        {valores}
      </section>

      <div className="founder-container">
        <img src={founder} alt="" width={250}/>


        <div className="founder-text">

          <h1>Founder</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus dui, semper vel egestas in, venenatis non sapien. Sed tortor massa, iaculis ac urna ac, varius sollicitudin ante. Proin vestibulum id metus eget condimentum. Cras dignissim porta est, viverra egestas urna placerat ac. Praesent sagittis luctus blandit. Suspendisse quis nibh ante. Sed mattis dolor aliquet arcu tempor, in ornare eros commodo. Donec bibendum molestie mauris.

            Fusce feugiat lectus in magna auctor, id mollis massa sodales. Vivamus sit amet sapien tristique, tincidunt purus at, finibus odio. Nullam in gravida tortor, sit amet blandit elit. Maecenas consectetur tortor quis bibendum ultricies. Nulla sodales, mauris bibendum pharetra ullamcorper, felis orci maximus ante, non aliquam arcu lectus sed metus. Fusce a ornare magna. Sed et metus quis ipsum rhoncus eleifend sit amet quis tortor. 
            </p>
          </div>
        </div>


      <OurTeamSlider />

      <div className="timeline-container">
        <h1 style={{textAlign: "center"}}>Nuestra Historia</h1>
        <Timeline events={events} />
      </div>

      {toggle ? <Chat /> : <WhatsappChatBot />}

    </>
  )
}

export default AboutUsPage